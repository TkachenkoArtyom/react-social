export const validators = {
    required: value => (value ? undefined : 'Required'),
    mustBeNumber: value => (isNaN(value) ? 'Must be a number' : undefined),
    minValue: min => value =>
        isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`,
    composeValidators: (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined),
    maxLength: maxLength => {
        return (value) => {
            if (!value || value.length > maxLength) return `Max length is ${maxLength} symbols`
            return undefined;
        }
    }
}
