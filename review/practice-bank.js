/* Parameterized practice families. Everything is generated in the student's browser. */
(function(){
  "use strict";
  function ri(a,b){return a+Math.floor(Math.random()*(b-a+1));}
  function nz(a,b){var v=0;while(!v)v=ri(a,b);return v;}
  function choice(xs){return xs[ri(0,xs.length-1)];}
  function distinct(a,b){var x=ri(a,b),y=ri(a,b);while(y===x)y=ri(a,b);return [x,y];}
  function signed(n){return n<0?" - "+Math.abs(n):" + "+n;}
  function coeff(n,v){return n===1?v:n===-1?"-"+v:n+v;}
  function poly(a,b,c){
    return coeff(a,"x^2")+(b===0?"":b<0?"-"+coeff(-b,"x"):"+"+coeff(b,"x"))+
      (c===0?"":c>0?"+"+c:String(c));
  }
  function factor(x){return x===0?"x":x<0?"(x+"+Math.abs(x)+")":"(x-"+x+")";}
  function sqFactor(x){return factor(x)+"^2";}
  function num(topic,prompt,answer,solution,hint){
    return {topic:topic,prompt:prompt,kind:"number",answer:answer,solution:solution,hint:hint,
      instruction:"Enter a number. Fractions such as 3/4 are accepted."};
  }
  function pair(topic,prompt,answer,solution,hint){
    return {topic:topic,prompt:prompt,kind:"pair",answer:answer,solution:solution,hint:hint,
      instruction:"Enter an ordered pair, for example (2, -3)."};
  }
  function set(topic,prompt,answer,solution,hint){
    return {topic:topic,prompt:prompt,kind:"set",answer:answer,solution:solution,hint:hint,
      instruction:"Enter all real solutions, separated by commas. Order does not matter."};
  }
  function mc(topic,prompt,options,answer,solution,hint){
    return {topic:topic,prompt:prompt,kind:"choice",options:options,answer:answer,solution:solution,hint:hint,
      instruction:"Select one answer."};
  }
  var bank={
    1:[
      {topic:"Function or relation",make:function(){
        var a=ri(-4,2),b=ri(3,7),v=ri(-3,4),w=v+ri(1,4),sameInput=Math.random()<0.5;
        var secondInput=sameInput?a:b;
        return mc("Function or relation","Is the relation $\\{("+a+","+v+"),("+secondInput+","+(sameInput?w:v)+")\\}$ a function?",
          ["Yes","No"],sameInput?"No":"Yes",[
            sameInput?"The input "+a+" has been paired with two different outputs.":"The inputs "+a+" and "+b+" are different, even though they share the output "+v+".",
            sameInput?"A function cannot assign two different outputs to the same input.":"Repeated outputs are allowed; this relation is a function."
          ],"Check whether any one input has two different outputs.");
      }},
      {topic:"Function evaluation",make:function(){
        var a=nz(-3,3),b=ri(-5,5),c=ri(-7,7),x=ri(-3,3),y=a*x*x+b*x+c;
        return num("Function evaluation","For $f(x)="+poly(a,b,c)+"$, calculate $f("+x+")$.",y,[
          "Substitute $x="+x+"$ into the formula: $f("+x+")="+a+"("+x+")^2"+signed(b)+"("+x+")"+signed(c)+"$.",
          "Evaluate the powers and products, then add: $f("+x+")="+y+"$."
        ],"Substitute the entire input before collecting terms.");
      }},
      {topic:"Expression substitution",make:function(){
        var a=nz(-3,3),b=ri(-6,6),c=ri(-4,5),answer=2*a+b;
        return num("Expression substitution","Let $f(x)="+poly(a,b,c)+"$. What is the coefficient of $x$ after expanding $f(x+1)$?",answer,[
          "$f(x+1)="+a+"(x+1)^2"+signed(b)+"(x+1)"+signed(c)+"$.",
          "Since $(x+1)^2=x^2+2x+1$, the linear contributions are $"+2*a+"x$ and $"+b+"x$.",
          "The coefficient of $x$ is $2("+a+")+("+b+")="+answer+"$."
        ],"Expand $(x+1)^2$ carefully: its middle term is $2x$.");
      }},
      {topic:"Domain",make:function(){
        var k=nz(-8,8);
        return num("Domain","Which real input is excluded from the domain of $f(x)=\\frac{1}{x"+(k>0?"-":"+")+Math.abs(k)+"}$?",k,[
          "The denominator cannot be zero.","Solve $x-"+k+"=0$ to obtain $x="+k+"$.","Every other real input is allowed."
        ],"Set the denominator equal to zero.");
      }},
      {topic:"Transformations",make:function(){
        var h=nz(-5,5),k=nz(-5,5),a=nz(-3,3);
        return pair("Transformations","Find the vertex of $g(x)="+a+sqFactor(h)+signed(k)+"$.",[h,k],[
          "Compare with vertex form $a(x-h)^2+k$.","The graph shifts horizontally to $x="+h+"$ and vertically to $y="+k+"$.","The multiplier "+a+" changes the orientation/scale but not the vertex."
        ],"Look inside the parentheses for the horizontal shift, and outside for the vertical shift.");
      }},
      {topic:"Tracking points",make:function(){
        var u=ri(-3,3),v=ri(-3,4),h=ri(-3,3),a=nz(-3,3),k=ri(-4,4);
        return pair("Tracking points","A parent function $f$ passes through $("+u+","+v+")$. Which point lies on $g(x)="+a+"f(x"+(h>=0?"-":"+")+Math.abs(h)+")"+signed(k)+"$?",[u+h,a*v+k],[
          "For $g(x)=af(x-h)+k$, the input $u$ occurs at new input $u+h="+u+"+("+h+")="+(u+h)+"$.","The new output is $av+k="+a+"("+v+")+("+k+")="+(a*v+k)+"$.","Together these form $("+(u+h)+","+(a*v+k)+")$."
        ],"Move the x-coordinate by the horizontal shift; transform the y-coordinate outside.");
      }},
      {topic:"Square-root domain",make:function(){
        var h=ri(-6,7),k=ri(-4,5);
        return num("Square-root domain","What is the smallest allowed real input for $g(x)=\\sqrt{x"+(h>=0?"-":"+")+Math.abs(h)+"}"+signed(k)+"$?",h,[
          "The radicand must satisfy $x"+(h>=0?"-":"+")+Math.abs(h)+"\\ge0$.","Therefore $x\\ge"+h+"$. The vertical shift does not affect the domain."
        ],"Make the expression under the square root nonnegative.");
      }},
      {topic:"Horizontal scaling",make:function(){
        var b=ri(2,4),u=b*ri(-3,3),v=ri(-3,4),h=ri(-4,4);
        return num("Horizontal scaling","A point $("+u+","+v+")$ lies on $f$. Find the new $x$-coordinate of this point on $g(x)=f("+b+"(x"+(h>=0?"-":"+")+Math.abs(h)+"))$.",h+u/b,[
          "Set the inside argument equal to the original input: $"+b+"(x-"+h+")="+u+"$.","Divide by "+b+" and add "+h+": $x="+h+"+("+u+")/"+b+"="+(h+u/b)+"$."
        ],"Set the new inside input equal to the original point's x-value.");
      }}
    ],
    2:[
      {topic:"Slope",make:function(){
        var m=nz(-5,5),x1=ri(-4,2),dx=ri(1,5),y1=ri(-7,7),x2=x1+dx,y2=y1+m*dx;
        return num("Slope","Find the slope through $("+x1+","+y1+")$ and $("+x2+","+y2+")$.",m,[
          "Use $m=(y_2-y_1)/(x_2-x_1)$.","Here the rise is $"+y2+"-("+y1+")="+(y2-y1)+"$ and the run is $"+x2+"-("+x1+")="+dx+"$.","The slope is "+m+"."
        ],"Rise over run: subtract the y-coordinates in the same order as the x-coordinates.");
      }},
      {topic:"Line equation",make:function(){
        var m=nz(-4,4),b=ri(-8,8),x=ri(-4,4),y=m*x+b;
        return num("Line equation","A line has slope $m="+m+"$ and passes through $("+x+","+y+")$. In $y=mx+b$, what is $b$?",b,[
          "Substitute the slope and point into $y=mx+b$.","This gives $"+y+"="+m+"("+x+")+b$.","Subtract $"+(m*x)+"$ from both sides: $b="+b+"$."
        ],"Substitute the given point and slope, then isolate b.");
      }},
      {topic:"Vertex from standard form",make:function(){
        var a=nz(-3,3),h=ri(-4,4),k=ri(-6,6),b=-2*a*h,c=a*h*h+k;
        return pair("Vertex from standard form","Find the vertex of $f(x)="+poly(a,b,c)+"$.",[h,k],[
          "For $ax^2+bx+c$, use $h=-b/(2a)=-("+b+")/(2("+a+"))="+h+"$.","Evaluate $k=f(h)="+k+"$ using the original quadratic.","The vertex is $("+h+","+k+")$."
        ],"First find the axis $x=-b/(2a)$, then evaluate the function there.");
      }},
      {topic:"Completing the square",make:function(){
        var a=nz(-3,3),h=ri(-4,4),k=ri(-5,6),b=-2*a*h,c=a*h*h+k;
        return num("Completing the square","Express $"+poly(a,b,c)+"$ as $a(x-h)^2+k$. What is the final constant $k$?",k,[
          "Factor "+a+" from the variable terms before completing the square.","The square is $(x"+(h>=0?"-":"+")+Math.abs(h)+")^2$.","Rewriting gives $"+a+sqFactor(h)+signed(k)+"$, so $k="+k+"$."
        ],"First locate h, then use $k=f(h)$.");
      }},
      {topic:"Roots",make:function(){
        var r=distinct(-6,6),sum=r[0]+r[1],prod=r[0]*r[1];
        return set("Roots","Find every real zero of $f(x)=x^2"+(sum===0?"":signed(-sum)+"x")+signed(prod)+"$.",r,[
          "Find numbers with sum "+sum+" and product "+prod+".","Factor as $"+factor(r[0])+factor(r[1])+"$.","By the zero-product property, the roots are "+r.join(" and ")+"."
        ],"Look for two numbers whose sum is the negative of the x-coefficient and whose product is the constant.");
      }},
      {topic:"Discriminant",make:function(){
        var a=nz(-3,3),b=ri(-7,7),c=ri(-6,6),d=b*b-4*a*c;
        return num("Discriminant","Compute the discriminant $b^2-4ac$ for $f(x)="+poly(a,b,c)+"$.",d,[
          "Identify $a="+a+"$, $b="+b+"$, $c="+c+"$.","Compute $("+b+")^2-4("+a+")("+c+")="+d+"$.","Positive means two distinct real roots, zero means one repeated real root, negative means no real roots."
        ],"Do not forget that b is squared, even if b is negative.");
      }},
      {topic:"Three-point fitting",make:function(){
        var a=nz(-3,3),b=ri(-5,5),c=ri(-5,5);
        var y0=c,y1=a+b+c,y2=4*a+2*b+c;
        return num("Three-point fitting","A quadratic $f(x)=ax^2+bx+c$ passes through $(0,"+y0+")$, $(1,"+y1+")$, and $(2,"+y2+")$. Find $a$.",a,[
          "From x=0, $c="+y0+"$.","Subtract consecutive outputs: $f(1)-f(0)=a+b="+(y1-y0)+"$, and $f(2)-f(1)=3a+b="+(y2-y1)+"$.","Subtract these equations: $2a="+(y2-2*y1+y0)+"$, so $a="+a+"$."
        ],"Use second differences: $f(2)-2f(1)+f(0)=2a$.");
      }},
      {topic:"Axis of symmetry",make:function(){
        var h=ri(-5,5),d=ri(1,5),r1=h-d,r2=h+d;
        return num("Axis of symmetry","The zeros of a parabola are $x="+r1+"$ and $x="+r2+"$. What is the x-coordinate of its axis of symmetry?",h,[
          "The axis lies halfway between the two roots.","Average them: $("+r1+"+"+r2+")/2="+h+"$."
        ],"Use the midpoint of the two roots.");
      }}
    ],
    3:[
      {topic:"End behavior",make:function(){
        var n=ri(2,7),a=nz(-5,5),left=(n%2===0?a>0:a<0)?"up":"down",right=a>0?"up":"down";
        var options=["up / up","up / down","down / up","down / down"],correct=left+" / "+right;
        return mc("End behavior","The leading term of $p(x)$ is $"+coeff(a,"x^"+n)+"$. From LEFT to RIGHT, where do its two ends point?",options,correct,[
          "The degree "+n+" is "+(n%2?"odd":"even")+" and the leading coefficient "+a+" is "+(a>0?"positive":"negative")+".",
          "As $x\\to-\\infty$, the polynomial goes "+left+"; as $x\\to+\\infty$, it goes "+right+"."
        ],"Use only the degree's parity and the leading coefficient's sign.");
      }},
      {topic:"Degree",make:function(){
        var roots=distinct(-4,4),m=ri(1,4),n=ri(1,4),a=nz(-4,4);
        return num("Degree","Find the degree of $p(x)="+a+factor(roots[0])+"^"+m+factor(roots[1])+"^"+n+"$.",m+n,[
          "Each factor is linear, so its exponent gives its contribution to degree.","Add $"+m+"+"+n+"="+(m+n)+"$. The constant multiplier does not change degree."
        ],"Add the exponents of all nonconstant linear factors.");
      }},
      {topic:"Cross or touch",make:function(){
        var m=ri(1,5),root=ri(-5,5);
        return mc("Cross or touch","At $x="+root+"$, a polynomial has a root of multiplicity "+m+". What does its graph do there?",
          ["Crosses the x-axis","Touches the x-axis without crossing"],m%2?"Crosses the x-axis":"Touches the x-axis without crossing",[
            "The root at x="+root+" has multiplicity "+m+".","An "+(m%2?"odd":"even")+" multiplicity "+(m%2?"changes":"preserves")+" sign across the root."
          ],"Odd multiplicity crosses; even multiplicity touches.");
      }},
      {topic:"Sign chart",make:function(){
        var rs=distinct(-4,4).sort((a,b)=>a-b),a=nz(-3,3),n=ri(1,3),x=choice([rs[0]-1,rs[0]+0.5*(rs[1]-rs[0]),rs[1]+1]);
        var v=a*Math.pow(x-rs[0],n)*(x-rs[1]),sign=v>0?"Positive":"Negative";
        return mc("Sign chart","For $p(x)="+a+factor(rs[0])+"^"+n+factor(rs[1])+"$, what is the sign at $x="+x+"$?",
          ["Positive","Negative","Zero"],sign,[
            "At x="+x+", the two linear factors are "+(x-rs[0])+" and "+(x-rs[1])+".",
            "Compute the product $"+a+"("+ (x-rs[0]) +")^"+n+"("+ (x-rs[1]) +")="+v+"$.","Its sign is "+sign.toLowerCase()+"."
          ],"The factor signs, including the outside coefficient, determine the product sign.");
      }},
      {topic:"Distinct roots",make:function(){
        var r=distinct(-5,5),m=ri(1,4),n=ri(1,4);
        return num("Distinct roots","How many DISTINCT real zeros does $p(x)="+factor(r[0])+"^"+m+factor(r[1])+"^"+n+"$ have?",2,[
          "Set each linear factor equal to zero: $x="+r[0]+"$ or $x="+r[1]+"$.","Each factor's multiplicity affects crossing behavior, but the number of distinct roots is 2."
        ],"Multiplicity does not create additional distinct x-intercepts.");
      }},
      {topic:"Crossings",make:function(){
        var roots=[-3,1,4],powers=[ri(1,4),ri(1,4),ri(1,4)],count=powers.filter(n=>n%2).length;
        return num("Crossings","How many x-axis CROSSINGS does $p(x)="+factor(roots[0])+"^"+powers[0]+factor(roots[1])+"^"+powers[1]+factor(roots[2])+"^"+powers[2]+"$ have?",count,[
          "Examine multiplicities "+powers.join(", ")+".",
          "The factors with odd exponents cause crossings; even exponents cause touches.",
          "There are "+count+" odd-multiplicity roots."
        ],"Count odd exponents, not total roots.");
      }},
      {topic:"Leading coefficient",make:function(){
        var r=distinct(-4,4),a=nz(-6,6),m=ri(1,3);
        return num("Leading coefficient","What is the leading coefficient of $p(x)="+a+factor(r[0])+"^"+m+factor(r[1])+"$?",a,[
          "Each factor of the form $(x-r)$ has leading coefficient 1.","Multiplying their leading terms and the constant outside gives leading coefficient "+a+"."
        ],"Multiply the leading coefficients of all factors.");
      }},
      {topic:"Y-intercept",make:function(){
        var r=distinct(-3,3),a=nz(-2,2),v=a*(-r[0])*(-r[1]);
        return num("Y-intercept","Find the y-intercept of $p(x)="+a+factor(r[0])+factor(r[1])+"$ (give the y-coordinate).",v,[
          "Set $x=0$ to locate the y-intercept.","Evaluate $p(0)="+a+"("+(-r[0])+")("+(-r[1])+")="+v+"$."
        ],"Evaluate the polynomial at x=0.");
      }}
    ],
    4:[
      {topic:"Zeros",make:function(){
        var r=distinct(-6,6);
        return num("Zeros","Where does $f(x)=\\frac{"+factor(r[0])+"}{"+factor(r[1])+"}$ cross the x-axis?",r[0],[
          "A rational function is zero where its numerator is zero and denominator is not.","The numerator vanishes at $x="+r[0]+"$, and the denominator does not vanish there."
        ],"Set the numerator equal to zero, but check the denominator.");
      }},
      {topic:"Vertical asymptotes",make:function(){
        var r=distinct(-6,6);
        return num("Vertical asymptotes","Find the vertical asymptote of $f(x)=\\frac{"+factor(r[0])+"}{"+factor(r[1])+"}$.",r[1],[
          "The denominator becomes zero at $x="+r[1]+"$.","The numerator is nonzero there, so this is a genuine vertical asymptote."
        ],"A noncanceled denominator zero gives a vertical asymptote.");
      }},
      {topic:"Removable holes",make:function(){
        var roots=[-5,-3,-1,1,3,5].sort(()=>Math.random()-0.5),a=roots[0],b=roots[1],h=roots[2];
        return num("Removable holes","Find the x-coordinate of the hole in $f(x)=\\frac{"+factor(a)+factor(h)+"}{"+factor(b)+factor(h)+"}$.",h,[
          "The factor $"+factor(h)+"$ occurs in both numerator and denominator.","It cancels algebraically but remains excluded from the original domain.","Therefore there is a hole at $x="+h+"$."
        ],"Identify the common numerator/denominator factor.");
      }},
      {topic:"Hole height",make:function(){
        var roots=[-5,-3,-1,1,3,5].sort(()=>Math.random()-0.5),a=roots[0],b=roots[1],h=roots[2],v=(h-a)/(h-b);
        return num("Hole height","For $f(x)=\\frac{"+factor(a)+factor(h)+"}{"+factor(b)+factor(h)+"}$, find the y-coordinate of the hole at $x="+h+"$.",v,[
          "Cancel the common factor $"+factor(h)+"$, retaining the excluded input $x="+h+"$.","Evaluate the reduced expression at h: $("+h+"-("+a+"))/("+h+"-("+b+"))="+(h-a)+"/"+(h-b)+"$.","The resulting y-coordinate is "+v+"."
        ],"Cancel first, then substitute the hole's x-coordinate into the reduced expression.");
      }},
      {topic:"Horizontal asymptotes",make:function(){
        var a=nz(-6,6),b=nz(-6,6),c=ri(-6,6),d=ri(-5,5);
        return num("Horizontal asymptotes","Find the y-value of the horizontal asymptote of $f(x)=\\frac{"+coeff(a,"x^2")+(c? signed(c):"")+"}{"+coeff(b,"x^2")+(d? signed(d)+"x":"")+"+1}$.",a/b,[
          "Both numerator and denominator have degree 2.","At large $|x|$, the leading terms dominate, so the ratio tends to $"+a+"/"+b+"$."
        ],"Equal degrees: divide the leading coefficients.");
      }},
      {topic:"Degree comparison",make:function(){
        var a=nz(-5,5),b=ri(2,5),c=ri(1,7);
        return mc("Degree comparison","What is the horizontal asymptote of $f(x)=\\frac{"+coeff(a,"x")+"+"+c+"}{x^2+"+b+"}$?",
          ["$y=0$","$y=1$","No horizontal asymptote"],"$y=0$",[
            "The numerator degree is 1; the denominator degree is 2.","The denominator grows faster, so the ratio approaches zero as $x\\to\\pm\\infty$."
          ],"Compare the highest powers of x in numerator and denominator.");
      }},
      {topic:"Slant asymptotes",make:function(){
        var b=nz(-5,5),c=ri(-6,6),r=nz(-6,6),middle=c-b,constant=r-b*c;
        return num("Slant asymptotes","For $f(x)=\\frac{"+poly(1,middle,constant)+"}{x"+(b>0?"-":"+")+Math.abs(b)+"}$, what is the y-intercept of its SLANT asymptote?",c,[
          "Divide the numerator by $"+factor(b)+"$.","The quotient is $x"+signed(c)+"$ and the remainder is "+r+".",
          "Thus $f(x)=x"+signed(c)+"+\\frac{"+r+"}{"+factor(b)+"}$; the asymptote is $y=x"+signed(c)+"$."
        ],"Use polynomial division: the linear quotient is the slant asymptote.");
      }},
      {topic:"Signs",make:function(){
        var r=distinct(-5,5),x=ri(-7,7);while(x===r[0]||x===r[1])x=ri(-7,7);
        var v=(x-r[0])/(x-r[1]);
        return mc("Signs","Is $f(x)=\\frac{"+factor(r[0])+"}{"+factor(r[1])+"}$ positive or negative at $x="+x+"$?",
          ["Positive","Negative"],v>0?"Positive":"Negative",[
            "At x="+x+", the numerator has sign "+(x-r[0]>0?"+":"-")+" and the denominator has sign "+(x-r[1]>0?"+":"-")+".",
            "Equal signs give a positive ratio; opposite signs give a negative one."
          ],"Make a two-factor sign chart at the specified input.");
      }}
    ],
    5:[
      {topic:"Radical domains",make:function(){
        var h=ri(-7,7);
        return num("Radical domains","Find the smallest allowed input for $g(x)=\\sqrt{x"+(h>=0?"-":"+")+Math.abs(h)+"}$.",h,[
          "A real square root requires the radicand to be nonnegative.","Solve $x-"+h+"\\ge0$, obtaining $x\\ge"+h+"$."
        ],"Set the radicand greater than or equal to zero.");
      }},
      {topic:"Inverse evaluation",make:function(){
        var a=nz(-5,5),b=ri(-8,8),x=ri(-5,5),y=a*x+b;
        return num("Inverse evaluation","For $f(x)="+coeff(a,"x")+signed(b)+"$, evaluate $f^{-1}("+y+")$.",x,[
          "An inverse undoes the original function, so solve $f(x)="+y+"$.","Solve $"+a+"x"+signed(b)+"="+y+"$, giving $x="+x+"$."
        ],"Ask which input to f would give the stated output.");
      }},
      {topic:"Linear inverses",make:function(){
        var a=nz(-5,5),b=nz(-7,7);
        return num("Linear inverses","Let $f(x)="+coeff(a,"x")+signed(b)+"$. Evaluate $f^{-1}(0)$.",-b/a,[
          "Write $y="+a+"x"+signed(b)+"$ and interchange input and output.","Set $y=0$ in the original equation: $0="+a+"x"+signed(b)+"$.","Solve to obtain $x="+(-b)+"/"+a+"$."
        ],"Find the input that produces output zero.");
      }},
      {topic:"Restricted quadratic inverse",make:function(){
        var h=ri(-5,5),k=ri(-4,6),n=ri(1,5);
        return num("Restricted quadratic inverse","Let $f(x)="+sqFactor(h)+signed(k)+"$ on the domain $x\\ge"+h+"$. Evaluate $f^{-1}("+(k+n*n)+")$.",h+n,[
          "The restricted inverse is $f^{-1}(y)="+h+"+\\sqrt{y-("+k+")}$.","Substitute $y="+(k+n*n)+"$: $"+h+"+\\sqrt{"+(n*n)+"}="+(h+n)+"$.","Choose the positive square root because the original input is restricted to $x\\ge"+h+"$."
        ],"On the right-hand branch, inverse inputs use the positive square root.");
      }},
      {topic:"Inverse domains",make:function(){
        var h=ri(-4,4),k=ri(-4,7);
        return num("Inverse domains","The function $f(x)="+sqFactor(h)+signed(k)+"$ has domain $x\\ge"+h+"$. What is the smallest input allowed for $f^{-1}$?",k,[
          "The original parabola reaches its minimum value $k="+k+"$ at its vertex.","The range of $f$ is $["+k+",\\infty)$.","The inverse domain equals that range, so its smallest input is "+k+"."
        ],"The domain of the inverse is the range of the original.");
      }},
      {topic:"Cube roots",make:function(){
        var x=nz(-5,5),y=x*x*x;
        return num("Cube roots","Evaluate $\\sqrt[3]{"+y+"}$.",x,[
          "Find the real number whose cube is "+y+".","Because $("+x+")^3="+y+"$, the cube root is "+x+"."
        ],"Odd roots admit negative inputs and negative outputs.");
      }},
      {topic:"Radical equations",make:function(){
        var d=ri(-3,5),s=ri(2,5),x=d+s,c=s*s-d-s,extra=d+1-s;
        return num("Radical equations","Solve $\\sqrt{x"+(c>=0?"+":"-")+Math.abs(c)+"}=x"+(d>=0?"-":"+")+Math.abs(d)+"$. Give the VALID solution.",x,[
          "The right side must be nonnegative, requiring $x\\ge"+d+"$.","Square both sides: $x+("+c+")="+factor(d)+"^2$.","The quadratic has candidate roots "+x+" and "+extra+".",
          "The candidate "+extra+" gives a negative right side and is extraneous; "+x+" satisfies the original equality."
        ],"Squaring can introduce candidates with a negative right-hand side; check in the original equation.");
      }},
      {topic:"Extraneous solutions",make:function(){
        var d=ri(-3,5),s=ri(2,5),valid=d+s,c=s*s-d-s,extra=d+1-s;
        return num("Extraneous solutions","After squaring $\\sqrt{x"+(c>=0?"+":"-")+Math.abs(c)+"}=x"+(d>=0?"-":"+")+Math.abs(d)+"$, one candidate is extraneous. Which x-value is EXTRANEOUS?",extra,[
          "The original equation requires $x\\ge"+d+"$ because the right side is $"+(d>=0?"x-"+d:"x+"+(-d))+"$.","The squared equation gives "+valid+" and "+extra+".","The candidate "+extra+" is less than "+d+", so it cannot satisfy the original equation."
        ],"Check which algebraic root makes the right-hand side negative.");
      }},
      {topic:"Onto and codomain",make:function(){
        var cases=[
          {prompt:"Is $f:\\mathbb R\\to\\mathbb R$ with $f(x)=x^2$ ONTO its codomain?",ans:"No",why:"Negative real numbers are not squares of real inputs."},
          {prompt:"Is $f:\\mathbb R\\to[0,\\infty)$ with $f(x)=x^2$ ONTO its codomain?",ans:"Yes",why:"Every nonnegative y has a preimage $x=\\sqrt{y}$."},
          {prompt:"Is $f:\\mathbb R\\to\\mathbb R$ with $f(x)=x^3$ ONTO its codomain?",ans:"Yes",why:"Every real y has a real cube root."},
          {prompt:"Is $f:\\mathbb R\\to[0,\\infty)$ with $f(x)=|x|$ ONTO its codomain?",ans:"Yes",why:"Every nonnegative y is attained when x=y."}
        ];
        var p=choice(cases);
        return mc("Onto and codomain",p.prompt,["Yes","No"],p.ans,[
          "A map is onto if every element of its specified codomain is attained.",
          p.why+" The answer is "+p.ans.toLowerCase()+"."
        ],"Examine the stated codomain, not just whether the function is one-to-one.");
      }},
      {topic:"One-to-one test",make:function(){
        var variants=[
          {q:"Which function is one-to-one on all real numbers?",opts:["$f(x)=x^2$","$f(x)=|x|$","$f(x)=x^3$","$f(x)=\\cos x$"],ans:"$f(x)=x^3$"},
          {q:"Which function needs a restricted domain to have an inverse FUNCTION?",opts:["$f(x)=3x+2$","$f(x)=x^3$","$f(x)=x^2$","$f(x)=-5x+1$"],ans:"$f(x)=x^2$"}
        ],v=choice(variants);
        return mc("One-to-one test",v.q,v.opts,v.ans,[
          "A one-to-one function never repeats an output for two different inputs.","Lines with nonzero slope and $x^3$ are one-to-one, while $x^2$ and $|x|$ repeat outputs on symmetric inputs."
        ],"Use the horizontal line test.");
      }}
    ]
  };
  // Practice from the second half of the course, using the current readings.
  const t=String.raw;
  function rounded(topic,prompt,value,places,solution,hint){
    const q=num(topic,prompt,Number(value.toFixed(places)),solution,hint);
    q.tolerance=0.5*Math.pow(10,-places)+1e-9;
    q.instruction='Round to '+places+' decimal places. Use a calculator when needed.';
    return q;
  }
  function tuple(topic,prompt,answer,solution,hint){
    const q=pair(topic,prompt,answer,solution,hint);
    q.kind='tuple';q.instruction='Enter an ordered triple (x, y, z), using numbers or fractions.';return q;
  }
  const matrix=(rows,cols)=>t`\left[\begin{array}{${'c'.repeat(cols)}|c}${rows.map(r=>r.join('&')).join('\\\\')}\end{array}\right]`;
  Object.assign(bank,{
    6:[
      {topic:'Tables and models',make(){
        const a=ri(2,9),b=ri(2,4),ys=[a,a*b,a*b*b];
        return num(this.topic,t`At inputs $0,1,2$, the outputs are $${ys.join(',')}$. For the model $f(x)=A b^x$, find $b$.`,b,[
          t`Equal input steps give ratios $${ys[1]}/${ys[0]}=${b}$ and $${ys[2]}/${ys[1]}=${b}$.`,
          t`The initial value is $A=${a}$, so $f(x)=${a}(${b})^x$.`
        ],'Divide consecutive outputs; compare ratios rather than differences.');
      }},
      {topic:'Percent growth and decay',make(){
        const rate=choice([5,10,15,20,25,30]),grow=choice([true,false]),b=1+(grow?1:-1)*rate/100;
        return num(this.topic,t`An amount ${grow?'increases':'decreases'} by ${rate}% each year. What is the yearly multiplication factor $b$ in $A(t)=A_0b^t$?`,b,[
          t`Write ${rate}% as $${rate/100}$.`,t`The factor is $1${grow?'+':'-'}${rate/100}=${b.toFixed(2)}$.`
        ],'Start with 1 for the whole original amount, then add or subtract the fractional change.');
      }},
      {topic:'Negative exponents',make(){
        const b=ri(2,5),n=ri(1,4);
        return num(this.topic,t`Evaluate $${b}^{-${n}}$.`,Math.pow(b,-n),[
          t`A negative exponent means a reciprocal: $${b}^{-${n}}=1/${b}^{${n}}$.`,
          t`The answer is $1/${Math.pow(b,n)}$, a positive number.`
        ],'A negative exponent does not make the result negative.');
      }},
      {topic:'Continuous growth',make(){
        const a=100*ri(2,20),k=choice([0.02,0.04,0.06,-0.03,-0.05]),n=ri(2,12),v=a*Math.exp(k*n);
        return rounded(this.topic,t`A model is $A(t)=${a}e^{${k}t}$. Find $A(${n})$.`,v,2,[
          t`Substitute $t=${n}$ to obtain $A(${n})=${a}e^{(${k})(${n})}$.`,
          t`Evaluate without intermediate rounding: $A(${n})\approx${v.toFixed(2)}$.`
        ],'Multiply the continuous rate by the elapsed time in the exponent.');
      }},
      {topic:'Rewriting in base e',make(){
        const b=choice([0.5,0.8,0.9,1.1,1.5,2,3,4]);
        return rounded(this.topic,t`Rewrite $${b}^t=e^{kt}$. Find $k$.`,Math.log(b),4,[
          t`Use $b^t=e^{t\ln b}$, so $k=\ln(${b})\approx${Math.log(b).toFixed(4)}$.`,
          `The rate is ${b>1?'positive, representing growth':'negative, representing decay'}.`
        ],'Take the natural logarithm of the per-unit factor.');
      }},
      {topic:'Half-life amounts',make(){
        const n=ri(1,5),remaining=ri(2,12),a=remaining*Math.pow(2,n),T=choice([2,5,10,20,30]);
        return num(this.topic,t`A sample starts at ${a} grams and has half-life ${T} years. How many grams remain after ${n*T} years?`,remaining,[
          t`There are $${n*T}/${T}=${n}$ half-lives.`,
          t`Use $M=${a}(1/2)^{${n}}=${remaining}$ grams.`
        ],'Divide elapsed time by the half-life, then halve that many times.');
      }},
      {topic:'Half-life elapsed time',make(){
        const n=ri(1,6),T=choice([2,5,10,20,30]);
        return num(this.topic,t`A sample has half-life ${T} years. Its current mass is $1/${Math.pow(2,n)}$ of its original mass. How many years have elapsed?`,n*T,[
          t`The remaining fraction is $(1/2)^{${n}}$, so ${n} half-lives have elapsed.`,
          t`Elapsed time is $${n}\cdot${T}=${n*T}$ years.`
        ],'Count halvings before converting to years.');
      }},
      {topic:'Exponential graphs',make(){
        const a=ri(2,9),b=choice([0.5,0.8,2,3]);
        return mc(this.topic,t`For $f(x)=${a}(${b})^x$, which statement is correct?`,[
          'Increasing; horizontal asymptote y = 0','Decreasing; horizontal asymptote y = 0','Increasing; vertical asymptote x = 0','Decreasing; vertical asymptote x = 0'
        ],(b>1?'Increasing':'Decreasing')+'; horizontal asymptote y = 0',[
          t`The base $${b}$ is ${b>1?'greater than 1':'between 0 and 1'}, so the function ${b>1?'increases':'decreases'}.`,
          t`Outputs stay positive and approach 0 at one end. The intercept is $(0,${a})$.`
        ],'Compare the base to 1. An unshifted exponential has a horizontal asymptote.');
      }}
    ],
    7:[
      {topic:'Logarithm evaluation',make(){
        const b=choice([2,3,5,10]),n=ri(-4,4),arg=n<0?t`\frac{1}{${Math.pow(b,-n)}}`:String(Math.pow(b,n));
        return num(this.topic,t`Evaluate $\log_{${b}}\left(${arg}\right)$.`,n,[
          t`Ask: $${b}$ raised to which power gives $${arg}$?`,
          t`Since $${b}^{${n}}=${arg}$, the logarithm is $${n}$.`
        ],'Convert the logarithmic question to an exponential equation.');
      }},
      {topic:'Logarithm laws',make(){
        const p=ri(2,5),q=ri(2,5),ans=t`$${p}\ln x-${q}\ln y$`;
        return mc(this.topic,t`For $x,y>0$, expand $\ln(x^{${p}}/y^{${q}})$.`,[
          ans,t`$${p}\ln x+${q}\ln y$`,t`$\ln x-${p*q}\ln y$`,t`$\ln(x^{${p}})-${q}\ln(x+y)$`
        ],ans,[
          t`The quotient law gives $\ln(x^{${p}})-\ln(y^{${q}})$.`,
          t`Bring down each exponent to obtain $${p}\ln x-${q}\ln y$.`
        ],'Division becomes subtraction; powers become coefficients.');
      }},
      {topic:'Combining logarithms',make(){
        const n=ri(2,6),ans=t`$\ln(xy^{${n}})$`;
        return mc(this.topic,t`For $x,y>0$, combine $\ln x+${n}\ln y$ into one logarithm.`,[
          ans,t`$\ln(x+y^{${n}})$`,t`$\ln((xy)^{${n}})$`,t`$\ln(x/y^{${n}})$`
        ],ans,[t`First write $${n}\ln y=\ln(y^{${n}})$.`,t`Addition of logarithms corresponds to multiplication of their arguments: $\ln(xy^{${n}})$.`],
        'Move the coefficient into an exponent, then apply the product law.');
      }},
      {topic:'Change of base',make(){
        const b=choice([2,3,5,7]),a=ri(6,60),v=Math.log(a)/Math.log(b);
        return rounded(this.topic,t`Use change of base to evaluate $\log_{${b}}${a}$.`,v,4,[
          t`Use $\log_{${b}}${a}=\ln(${a})/\ln(${b})$.`,t`Evaluate the quotient: $${v.toFixed(4)}$.`
        ],'Divide the logarithm of the argument by the logarithm of the base.');
      }},
      {topic:'Exponential equations',make(){
        const b=choice([2,3,5]),a=ri(6,50),v=Math.log(a)/Math.log(b);
        return rounded(this.topic,t`Solve $${b}^x=${a}$.`,v,4,[
          t`Take natural logs: $x\ln(${b})=\ln(${a})$.`,
          t`Thus $x=\ln(${a})/\ln(${b})\approx${v.toFixed(4)}$.`
        ],'Take logarithms of both sides, then use the power law.');
      }},
      {topic:'Log equations and domains',make(){
        const h=ri(1,5),r=h+ri(1,6),n=r*r-h*h;
        return num(this.topic,t`Solve $\ln(x-${h})+\ln(x+${h})=\ln(${n})$. Give the valid real solution.`,r,[
          t`Both original arguments must be positive, requiring $x>${h}$.`,
          t`Combine logs: $x^2-${h*h}=${n}$, so $x^2=${r*r}$.`,
          t`The candidates are $\pm${r}$; only $${r}$ is in the original domain.`
        ],'Find the domain first. Combining logarithms can conceal original restrictions.');
      }},
      {topic:'Information in bits',make(){
        const n=ri(3,12),event=choice([true,false]);
        return num(this.topic,event?t`An event has probability $1/${Math.pow(2,n)}$. How many bits of information does its occurrence convey?`:
          t`Identifying one of ${Math.pow(2,n)} equally likely outcomes conveys how many bits?`,n,[
          event?t`Use $I=-\log_2 p=-\log_2(2^{-${n}})=${n}$.`:t`Use $I=\log_2 N=\log_2(2^{${n}})=${n}$.`,
          'This measures the information from identifying the outcome.'
        ],event?'Use minus the base-2 logarithm of the probability.':'Use the base-2 logarithm of the number of equally likely outcomes.');
      }},
      {topic:'Logarithmic sound scale',make(){
        const n=ri(1,6);
        return num(this.topic,t`A sound's intensity is $10^{${n}}$ times the reference intensity. Using $D=10\log_{10}(I/I_0)$, find $D$ in decibels.`,10*n,[
          t`Substitute the intensity ratio: $D=10\log_{10}(10^{${n}})$.`,
          t`The logarithm is $${n}$, so $D=${10*n}$ decibels.`
        ],'A base-10 logarithm undoes a power of 10.');
      }}
    ],
    8:[
      {topic:'Composition order',make(){
        const c=nz(-4,4),x=ri(-4,4),reverse=choice([true,false]),v=reverse?x*x+c:(x+c)*(x+c);
        return num(this.topic,t`Let $f(x)=x^2$ and $g(x)=x${signed(c)}$. Find $${reverse?'g(f':'f(g'}(${x}))$.`,v,[
          reverse?t`First $f(${x})=${x*x}$. Then $g(${x*x})=${x*x}${signed(c)}=${v}$.`:
            t`First $g(${x})=${x+c}$. Then $f(${x+c})=(${x+c})^2=${v}$.`,
          'Apply the innermost function first.'
        ],'Work from the inside outward; composition is not multiplication.');
      }},
      {topic:'Composition from tables',make(){
        const vals=[ri(2,7),ri(8,12),ri(13,18)],index=ri(0,2),out=vals.map(()=>ri(-8,8));
        return num(this.topic,t`The tables give $g(0)=${vals[0]}$, $g(1)=${vals[1]}$, $g(2)=${vals[2]}$, and $f(${vals[0]})=${out[0]}$, $f(${vals[1]})=${out[1]}$, $f(${vals[2]})=${out[2]}$. Find $f(g(${index}))$.`,out[index],[
          t`Look up $g(${index})=${vals[index]}$.`,t`Use that output as the next input: $f(${vals[index]})=${out[index]}$.`
        ],'Look up the inside output, then find it as an input to the outside function.');
      }},
      {topic:'Inner and outer functions',make(){
        const a=ri(2,5),b=ri(1,5),ans=t`$g(x)=${a}x+${b},\quad f(u)=\sqrt u$`;
        return mc(this.topic,t`Which inner function $g$ and outer function $f$ give $H(x)=\sqrt{${a}x+${b}}$ as $f(g(x))$?`,[
          ans,t`$g(x)=\sqrt x,\quad f(u)=${a}u+${b}$`,t`$g(x)=${a}x,\quad f(u)=\sqrt u+${b}$`
        ],ans,[t`First calculate the entire radicand $g(x)=${a}x+${b}$.`,t`Then take its square root with $f(u)=\sqrt u$.`],
        'Describe what must happen before the square root is taken.');
      }},
      {topic:'Composite domains',make(){
        const n=ri(2,7),ans=t`$(-${n},${n})$`;
        return mc(this.topic,t`Find the real domain of $F(x)=\ln(${n*n}-x^2)$.`,[
          ans,t`$[-${n},${n}]$`,t`$(-\infty,-${n})\cup(${n},\infty)$`,t`$\mathbb R$`
        ],ans,[t`The logarithm requires $${n*n}-x^2>0$.`,t`Thus $x^2<${n*n}$, or $-${n}<x<${n}$. Endpoints are excluded because $\ln0$ is undefined.`],
        'The entire logarithm argument must be strictly positive.');
      }},
      {topic:'Inverse identities and domains',make(){
        const cases=[
          [t`$e^{\ln x}$`,t`$x$, with $x>0$`,[t`$x$, for every real $x$`,t`$|x|$, for every real $x$`],'The original logarithm requires a positive input.'],
          [t`$\sqrt{x^2}$`,t`$|x|$, for every real $x$`,[t`$x$, for every real $x$`,t`$-x$, for every real $x$`],'The principal square root is nonnegative, even when x is negative.'],
          [t`$\ln(e^x)$`,t`$x$, for every real $x$`,[t`$x$, only for $x>0$`,t`$e^x$, for every real $x$`],'An exponential output is always positive, so every real x is allowed.']
        ],c=choice(cases);
        return mc(this.topic,'Simplify '+c[0]+' and retain its original real domain.',[c[1],...c[2]],c[1],[c[3],'Apply the inverse relationship while keeping its domain.'],
        'Check the domain before simplifying.');
      }},
      {topic:'Exponential substitution',make(){
        const b=choice([2,3]),r=ri(1,3),s=ri(4,5),u=Math.pow(b,r),v=Math.pow(b,s);
        return set(this.topic,t`Solve $${b}^{2x}-${u+v}\cdot${b}^x+${u*v}=0$.`,[r,s],[
          t`Let $u=${b}^x>0$. Then the equation becomes $u^2-${u+v}u+${u*v}=0$.`,
          t`Factor $(u-${u})(u-${v})=0$. Both roots are positive.`,
          t`Thus $${b}^x=${u}=${b}^{${r}}$ or $${b}^x=${v}=${b}^{${s}}$, giving $x=${r}$ or $${s}$.`
        ],'Set the repeated exponential equal to a temporary variable, solve the quadratic, then return to x.');
      }},
      {topic:'Logarithmic substitution',make(){
        const b=choice([2,3]),r=ri(-2,1),s=ri(2,4);
        return set(this.topic,t`Solve $(\log_{${b}}x)^2${signed(-(r+s))}\log_{${b}}x${signed(r*s)}=0$.`,[Math.pow(b,r),Math.pow(b,s)],[
          t`The original domain is $x>0$. Let $u=\log_{${b}}x$.`,
          t`The quadratic factors as $${factor(r).replaceAll('x','u')}${factor(s).replaceAll('x','u')}$, so $u=${r}$ or $u=${s}$.`,
          t`Return to $x$: $x=${b}^{${r}}$ or $x=${b}^{${s}}$. Both are positive.`
        ],'Solve for the logarithm first, then exponentiate to recover x.');
      }},
      {topic:'Undoing composite layers',make(){
        const n=ri(2,7),c=ri(1,5);
        return set(this.topic,t`Solve $\ln(x^2+${c})=\ln(${n*n+c})$.`,[-n,n],[
          t`The argument $x^2+${c}$ is always positive.`,
          t`Equate arguments: $x^2+${c}=${n*n+c}$, so $x^2=${n*n}$.`,
          t`Both $x=-${n}$ and $x=${n}$ check in the original equation.`
        ],'The logarithm is one-to-one, but squaring can give two inputs.');
      }},
      {topic:'Composite graph features',make(){
        const h=ri(-5,5);
        return pair(this.topic,t`Find the peak $(x,y)$ of $K(x)=e^{-${sqFactor(h)}}$.`,[h,1],[
          t`A square is nonnegative, so its negative is at most 0. The largest exponent occurs at $x=${h}$.`,
          t`There $K(${h})=e^0=1$. The range is $(0,1]$ and the graph is symmetric about $x=${h}$.`
        ],'Maximize the exponent by making the square zero.');
      }}
    ],
    9:[
      {topic:'Two-variable systems',make(){
        const x=ri(-5,5),y=ri(-5,5),a=ri(2,5),s=x+y,d=a*x-y;
        return pair(this.topic,t`Solve $\begin{cases}x+y=${s}\\${a}x-y=${d}.\end{cases}$`,[x,y],[
          t`Add the equations: $${a+1}x=${s+d}$, so $x=${x}$.`,
          t`Substitute into $x+y=${s}$ to obtain $y=${y}$.`,
          t`Check: $${x}+(${y})=${s}$ and $${a}(${x})-(${y})=${d}$.`
        ],'Adding the equations eliminates y.');
      }},
      {topic:'Classifying systems',make(){
        const m=nz(-4,4),c=ri(-6,6),kind=ri(0,2),m2=kind===0?m+1:m,c2=kind===1?c+ri(1,5):c;
        const ans=['One solution','No solution','Infinitely many solutions'][kind];
        return mc(this.topic,t`Classify $y=${m}x${signed(c)}$ and $y=${m2}x${signed(c2)}$.`,[
          'One solution','No solution','Infinitely many solutions'
        ],ans,[kind===0?'Different slopes give one intersection.':kind===1?'Equal slopes and different intercepts give distinct parallel lines.':'The same slope and intercept describe the same line.',ans+'.'],
        'Compare both the slopes and the intercepts.');
      }},
      {topic:'Back-substitution',make(){
        const x=ri(-4,4),y=ri(-4,4),z=ri(-4,4),a=ri(2,5),c=x-y+2*z,d=y-z;
        return tuple(this.topic,t`Solve $\begin{cases}x-y+2z=${c}\\y-z=${d}\\${a}z=${a*z}.\end{cases}$`,[x,y,z],[
          t`The last equation gives $z=${z}$.`,t`Then $y=${d}+(${z})=${y}$.`,
          t`Finally $x=${c}+(${y})-2(${z})=${x}$.`
        ],'Start at the bottom equation, then work upward.');
      }},
      {topic:'Three-variable elimination',make(){
        const x=ri(-4,4),y=ri(-4,4),z=ri(-4,4),c=x+y+z,d=2*x+y-z,e=x-2*y+3*z;
        return tuple(this.topic,t`Solve $\begin{cases}x+y+z=${c}\\2x+y-z=${d}\\x-2y+3z=${e}.\end{cases}$`,[x,y,z],[
          t`Subtract twice equation 1 from equation 2: $-y-3z=${d-2*c}$.`,
          t`Subtract equation 1 from equation 3: $-3y+2z=${e-c}$.`,
          t`Subtract three times the new second equation from the new third: $11z=${11*z}$, so $z=${z}$.`,
          t`Back-substitute to obtain $y=${y}$ and $x=${x}$. Substitute these values into all three original equations to check.`
        ],'Eliminate x from the last two equations, then eliminate y.');
      }},
      {topic:'Free parameters',make(){
        const a=nz(-4,4),c=ri(-6,6),ans=t`$(x,y)=(${c}${signed(-a)}t,t)$`;
        return mc(this.topic,t`The equations $x${signed(a)}y=${c}$ and $2x${signed(2*a)}y=${2*c}$ describe the same line. With $y=t$, which parametrization gives every solution?`,[
          ans,t`$(x,y)=(${c}${signed(a)}t,t)$`,t`$(x,y)=(t,${c}${signed(-a)}t)$`
        ],ans,[t`There is one independent equation: $x${signed(a)}y=${c}$.`,
          t`Set $y=t$ and isolate $x=${c}${signed(-a)}t$. Every real $t$ is allowed.`],
        'Insert y = t into the remaining equation and solve for x.');
      }},
      {topic:'Ticket models',make(){
        const adult=ri(30,120),child=ri(20,100),pa=choice([12,15,18]),pc=choice([6,8,10]),total=adult+child,revenue=pa*adult+pc*child;
        return pair(this.topic,t`Adult tickets cost ${pa} dollars and child tickets cost ${pc} dollars. A total of ${total} tickets earns ${revenue} dollars. Enter (adult tickets, child tickets).`,[adult,child],[
          t`Let $a,c$ count the tickets: $a+c=${total}$ and $${pa}a+${pc}c=${revenue}$.`,
          t`Subtract ${pc} times the count equation from the revenue equation: $${pa-pc}a=${revenue-pc*total}$.`,
          t`Thus $a=${adult}$ and $c=${child}$. Both are nonnegative whole numbers.`
        ],'Use one equation for the total count and one for the total revenue.');
      }},
      {topic:'Mixture models',make(){
        const cheap=ri(2,8),expensive=ri(2,8),N=2*cheap+expensive,cost=18*cheap+14*expensive;
        return tuple(this.topic,t`Coffee costing 8, 10, and 14 dollars per pound is blended into ${N} pounds costing ${cost} dollars in total. Equal weights of the two cheaper coffees are used. Enter their weights in order (8, 10, 14 dollars per pound).`,[cheap,cheap,expensive],[
          t`Let the weights be $x,y,z$. Then $x+y+z=${N}$, $8x+10y+14z=${cost}$, and $x=y$.`,
          t`Set $x=y=w$. Then $z=${N}-2w$.`,
          t`The cost becomes $18w+14(${N}-2w)=${cost}$, so $-10w=${cost-14*N}$.`,
          t`Thus $x=y=${cheap}$ and $z=${expensive}$ pounds.`
        ],'The equal-weight condition reduces the three unknowns to two.');
      }}
    ],
    10:[
      {topic:'Augmented matrices',make(){
        const a=nz(-4,4),b=nz(-4,4),c=ri(-5,5),d=ri(-5,5),ans=t`$${matrix([[a,0,b,c],[0,1,-1,d]],3)}$`;
        return mc(this.topic,t`In column order $x,y,z$, choose the augmented matrix for $${a}x${signed(b)}z=${c}$ and $y-z=${d}$.`,[
          ans,t`$${matrix([[a,b,0,c],[0,1,-1,d]],3)}$`,t`$${matrix([[a,0,b,c],[1,-1,0,d]],3)}$`
        ],ans,['Keep one column for each variable, in the stated order.','A missing variable has coefficient zero; place the constants after the bar.'],
        'Include zeros for missing variables.');
      }},
      {topic:'Row operations',make(){
        const a=ri(2,5),b=ri(-4,4),c=ri(-6,6),d=ri(-5,5),e=ri(-8,8),r=[0,d-a*b,e-a*c];
        return tuple(this.topic,t`For $${matrix([[1,b,c],[a,d,e]],2)}$, apply $R_2\leftarrow R_2-${a}R_1$. Enter the three entries of the new second row, including the constant.`,r,[
          t`The first entry is $${a}-${a}(1)=0$.`,t`The second is $${d}-${a}(${b})=${r[1]}$.`,
          t`The constant is $${e}-${a}(${c})=${r[2]}$. Row 1 stays unchanged.`
        ],'Apply the operation entry by entry, including the augmented column.');
      }},
      {topic:'Legal row operations',make(){
        const a=ri(2,6),ans=t`$R_2\leftarrow0R_2$`;
        return mc(this.topic,'Which operation can change the solution set and is therefore forbidden?',[
          ans,t`$R_1\leftrightarrow R_2$`,t`$R_2\leftarrow-${a}R_2$`,t`$R_2\leftarrow R_2+${a}R_1$`
        ],ans,['Multiplying a row by zero erases its equation.','Swapping rows, nonzero scaling, and adding a multiple of a different row all preserve the solutions.'],
        'A permitted operation must retain the information in the system.');
      }},
      {topic:'Matrix back-substitution',make(){
        const x=ri(-5,5),y=ri(-5,5),z=ri(-4,4),a=ri(2,5);
        return tuple(this.topic,t`Solve the echelon matrix $${matrix([[1,2,-1,x+2*y-z],[0,1,3,y+3*z],[0,0,a,a*z]],3)}$. Enter $(x,y,z)$.`,[x,y,z],[
          t`The bottom row gives $${a}z=${a*z}$, so $z=${z}$.`,
          t`The middle row gives $y+3(${z})=${y+3*z}$, so $y=${y}$.`,
          t`The top row gives $x+2(${y})-(${z})=${x+2*y-z}$, so $x=${x}$.`
        ],'Read each row as an equation and start at the bottom.');
      }},
      {topic:'Pivots and solution types',make(){
        const kind=ri(0,2),c=ri(1,8),rows=kind===0?[[1,2,c],[0,1,3]]:kind===1?[[1,2,c],[0,0,3]]:[[1,2,c],[0,0,0]],ans=['One solution','No solution','Infinitely many solutions'][kind];
        return mc(this.topic,t`Classify the echelon matrix $${matrix(rows,2)}$.`,[
          'One solution','No solution','Infinitely many solutions'
        ],ans,[kind===0?'Both variable columns have pivots, with no contradiction.':kind===1?'The last row says 0 = 3, which is impossible.':'The last row adds no condition. The y-column has no pivot, so y is free.',ans+'.'],
        'Look for a contradiction first, then check whether every variable has a pivot.');
      }},
      {topic:'Zero rows and rectangular systems',make(){
        const x=ri(-5,5),y=ri(-5,5),ans='One solution';
        return mc(this.topic,t`An augmented matrix for TWO variables is $${matrix([[1,0,x],[0,1,y],[0,0,0]],2)}$. How many solutions does it have?`,[
          'One solution','No solution','Infinitely many solutions'
        ],ans,[t`The first two rows give $x=${x}$ and $y=${y}$. Both variable columns have pivots.`,
          'The zero row adds no condition, but it does not create a free variable.'],
        'A zero row does not by itself guarantee a free variable.');
      }},
      {topic:'Gaussian elimination',make(){
        const x=ri(-4,4),y=ri(-4,4),z=ri(-4,4),c=x+y+z,d=2*x+y-z,e=x-2*y+3*z;
        return tuple(this.topic,t`Use Gaussian elimination to solve $${matrix([[1,1,1,c],[2,1,-1,d],[1,-2,3,e]],3)}$.`,[x,y,z],[
          t`Use $R_2\leftarrow R_2-2R_1$ and $R_3\leftarrow R_3-R_1$. This gives bottom rows $[0\ -1\ -3\mid${d-2*c}]$ and $[0\ -3\ 2\mid${e-c}]$.`,
          t`Use $R_3\leftarrow R_3-3R_2$, giving $[0\ 0\ 11\mid${11*z}]$.`,
          t`Back-substitute: $z=${z}$, $y=${y}$, $x=${x}$.`
        ],'Make zeros below the first pivot, then below the second pivot.');
      }},
      {topic:'Quadratic fitting',make(){
        const a=nz(-3,3),b=ri(-5,5),c=ri(-5,5),y1=a+b+c,y3=9*a+3*b+c;
        return tuple(this.topic,t`Find $(a,b,c)$ for $f(x)=ax^2+bx+c$ through $(0,${c})$, $(1,${y1})$, and $(3,${y3})$.`,[a,b,c],[
          t`The points give $c=${c}$, $a+b+c=${y1}$, and $9a+3b+c=${y3}$.`,
          t`Remove $c$ to obtain $a+b=${a+b}$ and $3a+b=${3*a+b}$.`,
          t`Subtract to get $2a=${2*a}$, so $a=${a}$. Then $b=${b}$ and $c=${c}$.`,
          'Check the recovered quadratic at all three original inputs.'
        ],'Each point produces a linear equation in the unknown coefficients.');
      }},
      {topic:'Circuit conservation',make(){
        const j=ri(1,5),k=ri(1,5),i=j+k,p=i+2*j,q=2*j+3*k;
        return tuple(this.topic,t`Find $(I_1,I_2,I_3)$ from $I_1-I_2-I_3=0$, $I_1+2I_2=${p}$, and $2I_2+3I_3=${q}$.`,[i,j,k],[
          t`Subtract the first equation from the second to get $3I_2+I_3=${p}$.`,
          t`Three times the third equation minus twice this new equation gives $7I_3=${3*q-2*p}$.`,
          t`Thus $I_3=${k}$, $I_2=${j}$, and $I_1=${i}$. Check the junction condition $${i}=${j}+${k}$.`
        ],'Use the junction equation to eliminate I₁ from the second equation.');
      }},
      {topic:'Physical bounds on free variables',make(){
        const a=100*ri(5,12),b=a-100*ri(1,4);
        return num(this.topic,t`Traffic flows are $x_1=t$, $x_2=${a}-t$, $x_3=${b}-t$, and $x_4=t$. All flows must be nonnegative. What is the largest allowed value of $t$?`,b,[
          t`Nonnegativity requires $t\ge0$, $t\le${a}$, and $t\le${b}$.`,
          t`Since $${b}<${a}$, the physical interval is $0\le t\le${b}$.`
        ],'Impose nonnegativity on every flow and intersect the resulting conditions.');
      }}
    ]
  });

  window.PRECALC_PROBLEM_BANK=bank;
})();
