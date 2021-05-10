export interface IUser {
  _id: string
  username: string
  permission: Permission
  joinDate: string
}

export interface Permission {
  create: boolean
  add: boolean
  bookmark: boolean
  archive: boolean
  delete: boolean
  admin: boolean
}

export interface IRegister {
  username: string,
  password: string,
  secret: string
}

export interface ILogin {
  username: string,
  password: string,
}
