import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import {UsersService } from '../users.service';
import {CarService } from '../car.service';
import {Car} from '../car';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  cars: Car[];
  error = '';
  success = '';
  car = new Car('', 0);

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UsersService,
      private carService: CarService,
      private alertService: AlertService) { }

  ngOnInit() {
    this.getCars();
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
//   cars
getCars(): void {
    this.carService.getAllCars().subscribe(
      (res: Car[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  addCar(f) {
    this.resetErrors();

    this.carService.store(this.car)
      .subscribe(
        (res: Car[]) => {
          // Update the list of cars
          this.cars = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  updateCar(name, price, id) {
    this.resetErrors();

    this.carService.updateCars({ model: name.value, price: price.value, id: +id })
      .subscribe(
        (res) => {
          this.cars    = res;
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
  }

  deleteCar(id) {
    this.resetErrors();

    this.carService.deleteCars(+id)
      .subscribe(
        (res: Car[]) => {
          this.cars = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }
  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}