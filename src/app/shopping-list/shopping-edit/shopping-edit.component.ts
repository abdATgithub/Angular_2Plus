import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  ingredientEditSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;
  /* @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; */
  /* @Output() ingredientAdded = new EventEmitter<Ingredient>(); */
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientEditSubscription = this.slService.editSelectedIngredient
      .subscribe(
        (id: number) => {
          this.editedItemIndex = id;
          this.editMode = true;
          this.editedIngredient = this.slService.getIngredient(id);
          this.slForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          });
        }
      );
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    /* const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount); */
    const newIng = new Ingredient(value.name, value.amount);
    /* this.ingredientAdded.emit(newIng); */
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIng);
      this.onClear();
    } else {
      this.slService.addIngredient(newIng);
      this.onClear();
    }
    // this.editMode = !this.editMode;
    // form.reset();
  }

  ngOnDestroy() {
    this.ingredientEditSubscription.unsubscribe();
  }

}
