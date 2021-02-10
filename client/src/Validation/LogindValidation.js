export const Required = value => {
    return value ? undefined : 'Обязательное поле'
}

export const MaxLength = max => value => {
    return value && value.length > max ? `Максимальная длинна ${max} символов` : undefined
}

export const MinLength = min => value => {
    return value && value.length < min ? `Минимальная длинна ${min} символов` : undefined
}

export const Email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Некоректный email'
        : undefined