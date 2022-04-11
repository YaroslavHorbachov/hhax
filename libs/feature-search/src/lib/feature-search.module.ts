import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataAccessApiModule } from '@hhax/data-access-api';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DetailsComponent, ListComponent, SearchComponent, SearchPageComponent } from './components';
import { FeatureSearchRoutingModule } from './feature-search-routing.module';
import { SearchEffects } from './state/search.effects';
import { SearchFacade } from './state/search.facade';
import * as fromSearch from './state/search.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSearch.SEARCH_FEATURE_KEY, fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects]),
    DataAccessApiModule,
    FeatureSearchRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [SearchFacade],
  declarations: [ListComponent, SearchPageComponent, DetailsComponent, SearchComponent],
})
export class FeatureSearchModule {}
