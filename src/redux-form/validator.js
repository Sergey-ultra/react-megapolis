
//проверка на пустоту
export const required = value => (value || typeof value === 'number' ? undefined : 'Поле пустое')



//проверка на колво символов
const Length = (min,max) => value =>
    value && (value.length < min || value.length > max) ? `Должно быть ${min} и меньше ${max} символов` : undefined

export const lengthValid = Length(6,50)
