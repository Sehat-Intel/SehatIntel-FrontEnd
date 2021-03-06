import { Observable } from 'rxjs';

export interface UserData {
  name: String,
  age: number,
  diseasesName: String,
  doctorsFeedback: String,
  doctorsName: String,
  email: String,
  hospitalsName: String,
  prescription: String,
  labReportFileId: String,
  labReportFileUrl: String,
  caseCloseDate: Date,
  caseOpenDate: Date,
}

export abstract class UserDataService {
  abstract sendUserData(data: UserData): Observable<any>;
}
