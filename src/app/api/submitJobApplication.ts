// import { sanityClient } from '@/sanity/lib/client';
// import { IncomingForm } from 'formidable';
// import fs from 'fs';
// import { NextRequest, NextResponse } from 'next/server';
// import { promisify } from 'util';
// import { v4 as uuidv4 } from 'uuid';

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// const parseForm = promisify(new IncomingForm().parse);

// export async function POST(req: NextRequest) {
//     try {
//         const form = await parseForm(req);
//         const { fields, files } = form;

//         const { fullName, email, phoneNumber, coverLetter } = fields;
//         const resume = files?.resume?.[0]; 

//         let resumeAssetId = null;

//         if (resume) {
//             const fileData = fs.readFileSync(resume.filepath);
//             const fileAsset = await sanityClient.assets.upload('file', fileData, {
//                 filename: resume.originalFilename,
//             });
//             resumeAssetId = fileAsset._id;
//         }

//         const newJobApplication = {
//             _id: uuidv4(),
//             _type: 'jobApplication',
//             fullName,
//             email,
//             phoneNumber,
//             coverLetter,
//             resume: resumeAssetId ? { _type: 'file', asset: { _ref: resumeAssetId } } : null,
//         };

//         await sanityClient.create(newJobApplication);

//         return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
//     } catch (error) {
//         console.error('Error submitting job application:', error);
//         return NextResponse.json({ error: 'Failed to submit application.' }, { status: 500 });
//     }
// }
