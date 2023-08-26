import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { MessageService } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

interface Number {
  name: string;
  code: string;
}

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],

  providers: [MessageService]
})

export class ListPageComponent {

 visible: boolean = false;

 showDialog() {
  this.visible = true;
}

 sidebarVisible: boolean = false;
 
  cities: City[] | undefined;
  selectedCity: City | undefined;
 

  numbers: Number[] | undefined;
  selectedNumber: Number | undefined;

 data: any;

 options: any;


  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {
  }

     show() {
      this.messageService.add({ severity: 'success', summary: 'عملية ناجحة', detail: 'تم النسخ بنجاح' });
  }

  ngOnInit() {
      this.primengConfig.ripple = true;


      
      this.cities = [
        { name: 'سنوياً', code: 'yy' },
        { name: 'شهر', code: 'mm' },
        { name: 'يوم', code: 'ww' },
    ];

     this.numbers = [
      { name: '20', code: '20' },
      { name: '30', code: '30' },
      { name: '40', code: '40' },
  ];


    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
        datasets: [
            {
                label: 'Dataset 1',
                fill: true,
                borderColor: '#8A74F9',
                backgroundColor: 'rgba(138, 116, 249, 0.1)',
                yAxisID: 'y',
                tension: 0.4,
                data: [65, 59, 80, 81, 56, 55, 35, 80, 81, 56, 55, 10],
                pointStyle: 'circle',
                pointRadius: 6,
            }
        ]
    };
    
    this.options = {
      animation: true,
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: '#1C1C28',
              titleColor: '#fff',
              titleFont	:{
                size: 12,
                family: "'Noto Kufi Arabic', sans-serif",
                weight: 500,
              },
              bodyColor: '#8A74F9',
              rtl: 'true',
          }
        },
        scales: {
            x: {
                ticks: {
                    color: '#9291A5',
                    font: {
                      size: 12,
                      family: "'Noto Kufi Arabic', sans-serif",
                      weight: 500,
                  }
                },
                grid: {
                    color: surfaceBorder,
                    font: {
                      size: 12,
                      family: "'Noto Kufi Arabic', sans-serif",
                      weight: 500,
                  }
                }
            }
        }
    };
}

  }

