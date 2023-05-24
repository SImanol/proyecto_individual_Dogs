export const validate = (userData) => {

    let errors = {};
    const formatoImagenRegex = /\.(jpg|jpeg|png)$/;

    if(!userData.name) errors.name = 'This field can not be blank';
    if( userData.name?.length > 35) errors.name = 'The name cannot exceed 35 characters';
    if(!formatoImagenRegex.test(userData.image)) errors.image = 'The image must be in "jpg", "jpeg" or "png" format';
    if( isNaN(userData.heightMin) || userData.heightMin <= 0) errors.heightMin = 'The min must be a number greater than 0';
    if( isNaN(userData.heightMax) || userData.heightMax <= 0) errors.heightMax = 'The max must be a number greater than 0';
    if(userData.heightMax < userData.heightMin) errors.heightMax = 'The max cannot be a number less than the min.'
    if( isNaN(userData.weightMin) || userData.weightMin <= 0) errors.weightMin = 'The min must be a number greater than 0';
    if( isNaN(userData.weightMax) || userData.weightMax <= 0) errors.weightMax = 'The max must be a number greater than 0';
    if(userData.weightMax < userData.weightMin) errors.weightMin = 'The max cannot be a number less than the min.'
    if( isNaN(userData.life_span) || userData.life_span <= 0) errors.life_span = 'Must be a number greater than 0';

    return errors
};