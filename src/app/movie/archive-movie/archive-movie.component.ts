import { Component, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TmdbService } from 'src/app/tmdb.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-archive-movie',
  templateUrl: './archive-movie.component.html',
  styleUrls: ['./archive-movie.component.scss']
})
export class ArchiveMovieComponent {
  archiveForm = new FormGroup({
    movieTitle: new FormControl(null, Validators.required),
    participants: new FormArray([
      new FormGroup({
        name: new FormControl(null),
        rating: new FormControl(null)
      }, Validators.required)
    ]),
    dateWatched: new FormControl(null)
  });

  constructor(
    private tmdb: TmdbService,
    @Inject(MAT_DIALOG_DATA) private movie: {
      movieId: number,
      movieTitle: string
    }
    ) { }

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
    this.tmdb.archiveMovie(this.movie.movieId, this.archiveForm);
  }


}
