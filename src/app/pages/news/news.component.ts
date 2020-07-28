import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from "@angular/core";
import { TwitterApiService } from '../../twitter-api.service';

@Component({
  selector: "app-news",
  templateUrl: "news.component.html",
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {
  public myTimeline: any;

  constructor(
    private api: TwitterApiService,
    private renderer2: Renderer2, 
    private el: ElementRef
    ) { }

  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
        },
        err => console.log('HTTP Error', err),

      )
  }

  ngOnInit() {
    this.getTwitterTimeline();
  }

  ngAfterViewInit(): void {
    // Load widgets.js sccript needed to render the tweets
    let scriptEl = document.createElement('script');
    scriptEl.src = "https://platform.twitter.com/widgets.js"

    this.renderer2.appendChild(this.el.nativeElement, scriptEl);
  }
  
}
