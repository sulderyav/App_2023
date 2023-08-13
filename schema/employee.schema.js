const   Joi = require ("joi");

const id = Joi.string().min(1);
const nombre = Joi.string().min(3).max(50);
const apellido = Joi.string().min(3).max(80);
const email = Joi.string().email({ minDomainSegmets: 2, tlds:{ allow:["com", "net"] }});
const role= Joi.string().max(7).default("employee");

const insertSchemaEmployee = Joi.ojects({
    nombre: nombre.required(),
    apellido: apellido.require(),
    email: email.required(),
    role: role.required(),
})

const updateSchemaEmployee = Joi.objects({
    nombre: nombre.required(),
    apellido: apellido.require(),
    email: email.required(),
    role: role.required(),
})

const getOneIdSchemaEmployee = Joi.objects({
   id: id.require(),
});

module.exports = {insertSchemaEmployee, updateSchemaEmployee, getOneIdSchemaEmployee};
