// // import mongoose from "mongoose";

// // const lawyerSchema = new mongoose.Schema(
// //   {
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true },
// //     image: { type: String, required: true },
// //     speciality: { type: String, required: true },
// //     degree: { type: String, required: true },
// //     experience: { type: String, required: true },
// //     about: { type: String, required: true },
// //     available: { type: Boolean, default: true },
// //     fees: { type: Number, required: true },
// //     address: { type: Object, required: true },
// //     // date: { type: Number, required: true },
// //     date: { type: Date, default: Date.now },
// //     slots_booked: { type: Object, default: {} },
// //   },
// //   { minimize: false }
// // );

// // const lawyerModel =
// //   mongoose.models.lawyer || mongoose.model("lawyer", lawyerSchema);

// // export default lawyerModel;


// import mongoose from "mongoose";

// const lawyerSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     image: { type: String, required: true },
//     speciality: { type: String, required: true },
//     degree: { type: String, required: true },
//     experience: { type: String, required: true },
//     about: { type: String, required: true },
//     available: { type: Boolean, default: true },
//     fees: { type: Number, required: true },
//     address: { type: Object, required: true },
//     date: { type: Date, default: Date.now },
//     slots_booked: { type: Object, default: {} },
//   },
//   { minimize: false }
// );

// const lawyerModel = mongoose.models.lawyer || mongoose.model("lawyer", lawyerSchema);

// export default lawyerModel;


import mongoose from 'mongoose';

const lawyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  specialty: { type: String },
  experience: { type: Number },
  barcodeId: { type: String },
  image: { type: String }, // URL or file path for the image
});

const Lawyer = mongoose.model('Lawyer', lawyerSchema);

export default Lawyer; // Ensure this is a default export
