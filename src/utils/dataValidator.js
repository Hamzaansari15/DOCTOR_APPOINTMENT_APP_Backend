export const requestBodyValidator = (data, requiredFields) => {

    const errorArray = requiredFields.filter(item => {
        if (data.hasOwnProperty(item) && data[item] !== '') {
            return;
        }
        else return item;
    })
    if (errorArray.length) {
        const errorMessageArray = errorArray?.map(item => {
            return {
                'error': item,
                'message': `${item} is required`
            }
        })
        return errorMessageArray;
    }
    return null;


} 