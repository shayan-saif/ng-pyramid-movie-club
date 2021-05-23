import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TmdbService } from 'src/app/tmdb.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-archive-movie',
  templateUrl: './archive-movie.component.html',
  styleUrls: ['./archive-movie.component.scss']
})
export class ArchiveMovieComponent implements OnInit {
  currentDate: Date = new Date();
  currentUser: string;
  archiveForm = new FormGroup({
    dateWatched: new FormControl(this.currentDate, Validators.required),
    participants: new FormArray([
      new FormGroup({
        name: new FormControl(null),
        rating: new FormControl(0)
      })
    ])
  });

  constructor(
    private tmdb: TmdbService,
    @Inject(MAT_DIALOG_DATA) private movie: {
      movieId: number,
      movieTitle: string,
      currentUser: string;
    }
  ) { }

  ngOnInit() {
    this.archiveForm.get(['participants', 0, 'name']).setValue(this.movie.currentUser);
  }

  onAddParticipant() {
    const control = new FormGroup({
      name: new FormControl(null, Validators.required),
      rating: new FormControl(0, Validators.required)
    });
    (<FormArray>this.archiveForm.get('participants')).push(control);
  }

  onDeleteParticipant(id: number) {
    if ((<FormArray>this.archiveForm.controls.participants).length > 1) {
      (<FormArray>this.archiveForm.controls.participants).removeAt(id);
    }
  }

  getParticipantControls() {
    return ((<FormArray>this.archiveForm.get('participants')).controls)
  }


  onSubmit() {
    this.tmdb.archiveMovie(this.movie.movieId, this.archiveForm);
  }


}
