import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComicManager } from './comic-manager/comic-manager';

@Component({
  imports: [RouterOutlet, ComicManager],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('practicaComicManager');
}
