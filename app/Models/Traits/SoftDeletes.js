class SoftDeletes {
  register(Model, customOptions = {}) {
    const deletedAtColumn = customOptions.name || 'deleted_at'

    Model.addGlobalScope(builder => {
      builder.whereNull(`${Model.table}.${deletedAtColumn}`)
    }, 'adonis_soft_deletes')

    Model.queryMacro('withDeletes', function() {
      this.ignoreScopes(['adonis_soft_deletes'])
      return this
    })

    Model.queryMacro('onlyDeletes', function() {
      this.ignoreScopes(['adonis_soft_deletes'])
      this.whereNotNull(`${Model.table}.${deletedAtColumn}`)
      return this
    })

    Model.prototype.delete = async function() {
      this[deletedAtColumn] = new Date()

      await this.save()
    }

    Model.prototype.restore = async function() {
      this[deletedAtColumn] = null
      await this.save()
    }
    Model.prototype.forceDelete = async function() {
      await Model.query()
        .where(Model.primaryKey, this[Model.primaryKey])
        .ignoreScopes()
        .delete()
    }
  }
}
module.exports = SoftDeletes

/*
  .delete() coloca fecha en delete_at
  .forceDelete() elimina de manera fisica el registro
  user.restore() restaura el registro eliminado deleted_at = null
  User.find(1) // busca registros sin eliminar
  User.query().onlyDeletes().where('id',1).fetch() traer solo aquellos registros que esten borrados
  User.query().withDeletes().where('id',1).first() restaurar uno
  (Cuando se usa query() no se permite usar find() )
*/
