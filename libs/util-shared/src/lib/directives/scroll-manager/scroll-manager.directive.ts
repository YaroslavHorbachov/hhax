import { CommonModule } from '@angular/common';
import { Directive, HostListener, NgModule } from '@angular/core';

@Directive({
  selector: '[hhaxScrollManager]',
})
export class ScrollManagerDirective {
  @HostListener('scroll') public onScroll(): void {
    console.log('Scroll');
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollManagerDirective],
  exports: [ScrollManagerDirective],
})
export class ScrollManagerDirectiveModule {}
