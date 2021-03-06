import { Component, OnInit, HostListener   } from '@angular/core';
import { ContentsService } from '../contents.service';
import  AOS  from "aos";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public windowHeight= window.innerHeight
  public navFix=false;
  public whoWeAre
  public team
  public navbarHeight
  public counterNumber
  public ourServices
  public ourPortfolio

  constructor(private contentsService : ContentsService) {}

  ngOnInit(): void {
    AOS.init()
    this.getWhoWeAre()
    this.getTeam()
    this.getNavbarHeight()
    this.getOurServices()
    this.getOurPortfolio()
  }

  getNavbarHeight(){
    this.navbarHeight=document.getElementById("navbarBottom").offsetHeight;
}
  
  @HostListener("window:scroll", ['$event']) scrollFunction(){
    if(document.documentElement.scrollTop>this.windowHeight-this.navbarHeight){
      this.navFix=true
    }else{
      this.navFix=false
    }
  }

  getWhoWeAre():any{
    this.whoWeAre = this.contentsService.getWhoWeAre()
  }

  getTeam():any{
    this.team = this.contentsService.getTeam()
  }

  getOurServices():any{
    this.ourServices = this.contentsService.getOurServices()
  }

  getOurPortfolio():any{
    this.ourPortfolio = this.contentsService.getPortfolio()
  }
}
