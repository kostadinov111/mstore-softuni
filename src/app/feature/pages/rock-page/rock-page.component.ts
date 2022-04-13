import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-page',
  templateUrl: './rock-page.component.html',
  styleUrls: ['./rock-page.component.css']
})
export class RockPageComponent implements OnInit {

  infoRock: string = 'Hard rock or heavy rock is a loosely defined subgenre of rock music typified by a heavy use of aggressive vocals, distorted electric guitars, bass guitar, and drums, sometimes accompanied with keyboards. It began in the mid-1960s with the garage, psychedelic and blues rock movements. Some of the earliest hard rock music was produced by the Kinks, the Who, the Rolling Stones, the Yardbirds, Cream and the Jimi Hendrix Experience. In the late 1960s, bands such as the Jeff Beck Group, Iron Butterfly, the Beatles, Led Zeppelin, Golden Earring, Steppenwolf and Deep Purple also produced hard rock. The genre developed into a major form of popular music in the 1970s, with the Who, Led Zeppelin and Deep Purple being joined by Aerosmith, Kiss, Queen, AC/DC and Van Halen. During the 1980s, some hard rock bands moved away from their hard rock roots and more towards pop rock.Established bands made a comeback in the mid-1980s and hard rock reached a commercial peak in the 1980s, with glam metal bands such as Bon Jovi and Def Leppard and the rawer sounds of Guns N\' Roses which followed with great success in the later part of that decade. Hard rock began losing popularity with the commercial success of R&B, hip-hop, urban pop, grunge and later Britpop in the 1990s. Despite this, many post-grunge bands adopted a hard rock sound and the 2000s saw a renewed interest in established bands, attempts at a revival, and new hard-rock bands that emerged from the garage rock and post-punk revival scenes. Out of this movement came garage rock bands like The White Stripes, the Strokes, Interpol and later the Black Keys. In the 2000s, only a few hard-rock bands from the 1970s and 1980s managed to sustain highly successful recording careers.';

  constructor() { }

  ngOnInit(): void {
  }

}
