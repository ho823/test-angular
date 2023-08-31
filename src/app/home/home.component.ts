import { Component, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  styleUrls: ['./home.component.scss'],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeComponent {
  event1 = {
    text: "coucou"
  }

  handleEventClick(data: any) {
    console.log('received', data)
  }

}
