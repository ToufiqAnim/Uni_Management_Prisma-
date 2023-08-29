import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidaiton } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemister.controller';

const router = express.Router();
router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getDataById);

router.post(
  '/',
  validateRequest(AcademicSemesterValidaiton.create),
  AcademicSemesterController.insertIntoDB
);

export const AcademicSemesterRoutes = router;
