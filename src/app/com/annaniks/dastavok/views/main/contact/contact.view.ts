import { Component, OnInit, OnDestroy } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";
import { User } from "../../../models/models";
import { MessageService } from 'primeng/api';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
@Component({
    selector: "app-contact",
    templateUrl: "contact.view.html",
    styleUrls: ["contact.view.scss"]
})

export class ContactView implements OnInit, OnDestroy {
    public userForm: FormGroup;
    public userInfo: User;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    constructor(
        private _contactService: ContactService,
        private _fb: FormBuilder,
        private _messageService: MessageService

    ) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder() {
        this.userForm = this._fb.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            phoneNumber: [null, Validators.required],
            messages: [null, Validators.required]
        })
    }

    public contact(): void {
        this._contactService.contact({
            firstName: this.userForm.value.firstName,
            lastName: this.userForm.value.lastName,
            email: this.userForm.value.email,
            phoneNumber: this.userForm.value.phoneNumber,
            message: this.userForm.value.messages
        })
            .pipe(
                takeUntil(this._unsubscribe$)
            )
            .subscribe(() => {
                this._messageService.add({ severity: 'success', summary: 'Summary Text', detail: 'Detail Text' });
            },
                err => {
                    this._messageService.add({ severity: 'error', summary: 'Summary Text', detail: 'Detail Text' });
                }
            )

    }

    public checkIsValid(controlName: string): boolean {
        return this.userForm.get(controlName).hasError('required') && this.userForm.get(controlName).touched;
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }


}