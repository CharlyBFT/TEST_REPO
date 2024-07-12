import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    URLLOGIN: process.env.URLLOGIN
}
export const USER = {
    USERLOGIN: process.env.USERLOGIN,
    USERPASS: process.env.USERPASS,
}

export const EMPLOYE = {
    FIRSTNAMEEMP: process.env.FIRSTNAMEEMP,
    MIDDLENAMEEMP: process.env.MIDDLENAMEEMP,
    PHOTOEMP: process.env.PHOTOEMP,
    LASTNAMEEMP: process.env.LASTNAMEEMP,
    IDEMP: process.env.IDEMP,
    USEREMP: process.env.USEREMP,
    PASSEMP: process.env.PASSEMP,
    CONFIRMEDPASSEMP: process.env.CONFIRMEDPASSEMP
}