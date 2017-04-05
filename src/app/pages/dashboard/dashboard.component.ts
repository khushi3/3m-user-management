import { Component } from '@angular/core';
import { UserGroupService  } from './usergroup.service';
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { CustomModal } from './custom-modal-sample';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
  providers: [Modal],
  entryComponents: [
    CustomModal
  ]
})
export class Dashboard {


  public userGroups = [];
  public userGroupName : string;

   // roles = [
   //     {id:0, name: "--Select--"},
   //     {id: 1, name: "Create"},
   //     {id: 2, name: "Update"},
   //     {id: 3, name: "Edit"},
   //     {id: 4, name: "Delete"}
   //   ];

  public items = [];
  public item: string;

  constructor(private userGroupService : UserGroupService,public modal: Modal) {

    this.userGroupService.getUserGroups().subscribe(data => {
      this.userGroups = data;

      console.log(data);
    }, error => console.log('Could not load userGroups '));

  }

  removeRecordPlugin(item) {
        // this.recentlyRemoveUsers = this.table.items.remove(item);
    }

  addUserGroup() { //userGrpName : string
    //console.log("inside add")
        if (this.userGroupName) {
            //this.userGroupName = userGrpName;

            console.log( "func "+this.userGroupName);
            this.userGroupService.addUserGroup(this.userGroupName).
                subscribe((r:Response)=>{
                  console.log(r);
                });
            console.log("user group saved successfully!!");

            window.location.reload();
        }
    }


  onEdit(){
    console.log("clicking on edit")
  }
 onClick() {
   this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

  }