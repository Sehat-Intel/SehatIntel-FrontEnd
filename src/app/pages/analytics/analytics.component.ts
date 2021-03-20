import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadImageService } from '../../@core/mock/upload-image.service';
import { UserDataService } from '../../@core/mock/user-data.service';

@Component({
  selector: 'ngx-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  files: File[] = [];
  loading: Boolean = false;
  showThankYouMessage: Boolean = false;

  constructor(private fb: FormBuilder, private _userDataService: UserDataService, private _uploadImageservice:UploadImageService) { }

  ngOnInit(): void {
    this.firstForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.secondForm = this.fb.group({
      diseasesName: ['', Validators.required],
      doctorsName: ['', Validators.required],
      hospitalsName: ['', Validators.required],
      caseDateRange: ['', Validators.required],
      caseStartDate : [''],
      caseEndDate: ['']
    });
    this.thirdForm = this.fb.group({
      doctorsFeedback : ['', Validators.required],
      prescription: ['', Validators.required],
      labReportFileId: ['',],
      labReportFileUrl: ['',]
    });
  };


  onFirstFormSubmit() {
    console.log("First From Updated");
    // console.log(this.firstForm.value);
  };

  onSecondFormSubmit() {
    console.log("Second Frorm Updated");
    this.secondForm.value.caseStartDate = this.secondForm.value.caseDateRange.start;
    this.secondForm.value.caseEndDate = this.secondForm.value.caseDateRange.end;

    console.log(this.secondForm.value);


  };

  onThirdFormSubmit(){
    console.log("Third Frorm Updated");
    // console.log(this.thirdForm.value);
  };

  onSelectDropZone(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  };

  onRemoveDropZone(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  };


  imageUploadTrigger() {
  return new Promise<void>((resolve, reject) => {
    if(this.files[0]){
      const file_data = this.files[0];
      const data = new FormData();
      data.append('file', file_data);
      data.append('upload_preset', 'angular_cloudinary');
      data.append('cloud_name', 'imagecdntuminzee');

      this._uploadImageservice.uploadImage(data).subscribe((response) => {
          console.log(`url : ${response.secure_url}\npublic_id:${response.public_id}`);
          this.thirdForm.value.labReportFileUrl = response.secure_url
          this.thirdForm.value.labReportFileId = response.public_id
          resolve();
      }, (error) => {
        console.log(error);
      });
    }

  })
  };



  async onUploadDataBtn(){
    this.loading = true;
    await this.imageUploadTrigger();
    let obj = {
      ...this.firstForm.value,
      ...this.secondForm.value,
      ...this.thirdForm.value
    };
    console.log(obj);
    this._userDataService.sendUserData(obj).subscribe((response) => {
      console.log(response);
      this.loading = false;
      this.showThankYouMessage = true;
    })

  }




}
