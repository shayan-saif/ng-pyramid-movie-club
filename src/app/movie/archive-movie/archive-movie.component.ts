import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-archive-movie',
  templateUrl: './archive-movie.component.html',
  styleUrls: ['./archive-movie.component.scss']
})
export class ArchiveMovieComponent {
  archiveForm = new FormGroup({
    movieTitle: new FormControl(null, Validators.required),
    participants: new FormArray([]),
    dateWatched: new FormControl(null)
  });

  constructor() { }

  onAddParticipant() {
    const control = new FormGroup({
      name: new FormControl(null),
      rating: new FormControl(null)
    }, Validators.required);
    (<FormArray>this.archiveForm.get('participants')).push(control)
  }

  getParticipantControls() {
    return ((<FormArray>this.archiveForm.get('participants')).controls)
  }


  onSubmit() {
    // const recipe: RecipeModel = this.recipeForm.value;
    // this.addSub = this.recipeService.addRecipe(recipe).subscribe();
    console.log(this.archiveForm);
  }


}
