
export default {
    name: 'jobApplication',
    title: 'Job Application',
    type: 'document',
    fields: [
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'file',
        },
    ],
};
