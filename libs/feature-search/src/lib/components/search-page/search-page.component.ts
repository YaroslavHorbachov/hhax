import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchFacade } from '../../state/search.facade';

@Component({
  selector: 'hhax-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  constructor(private readonly searchFacade: SearchFacade) {}

  public readonly allRecords$ = this.searchFacade.allRecords$;

  public readonly isLoading$ = this.searchFacade.isLoading$;

  public readonly selectedRecord$ = this.searchFacade.selectedRecord$;

  public onSearch(name: string): void {
    this.searchFacade.load(name);
  }

  public onSelect(id: number): void {
    this.searchFacade.select(id);
  }
}
