console.log("JS Working");const e=document.querySelectorAll(".static-date-header");console.log(e);let t=document.createElement("p");const o=new Date;let n,a,l,r;e.forEach((function(e,c,d){n=Date.parse(e.textContent),a=new Date(n),l=o-a,r=l/864e5;let f=Math.floor(r%365.25%30.45),s=Math.floor(r%365.25/30.45),g=Math.floor(r/365.25)+" jaar, "+s+" maanden en "+f+" dagen geleden.";e.after(t,g)}));
//# sourceMappingURL=student1page2.js.map