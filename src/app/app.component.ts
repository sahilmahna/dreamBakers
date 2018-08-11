import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

   constructor(private router:Router ) { }

  OnClick(value)
  {
    console.log(value);
        this.router.navigate(['/'+value+''])
    

  }
      onView(route)
      {
        this.router.navigate([route]);
      }
  
      onSite(link)
      {
        // window.location.href=link;
        window.open(link, '_blank');
      }
}
