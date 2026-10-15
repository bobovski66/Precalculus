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
        var a=ri(-4,2),b=ri(3,7),v=ri(-3,4);
        return mc("Function or relation","Is the relation $\\{("+a+","+v+"),("+b+","+v+")\\}$ a function?",
          ["Yes","No"],"Yes",[
            "The two inputs "+a+" and "+b+" are different.",
            "They may share the same output "+v+". A function requires only one output per input."
          ],"Repeated outputs are allowed; check whether an input is repeated.");
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
          "The radicand must satisfy $x-"+h+"\\ge0$.","Therefore $x\\ge"+h+"$. The vertical shift does not affect the domain."
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
        return num("Line equation","The line $y="+coeff(m,"x")+signed(b)+"$ passes through $("+x+","+y+")$. If written $y=mx+b$, what is its $y$-intercept $b$?",b,[
          "The slope-intercept form $y=mx+b$ has $b$ as its value at $x=0$.","Substitute the point if needed: $"+y+"="+m+"("+x+")+b$, giving $b="+b+"$."
        ],"Set x to 0 or isolate b after substituting the point.");
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
          "Find numbers with sum "+sum+" and product "+prod+".","Factor as $("+factor(r[0])+")("+factor(r[1])+")$ (with outer parentheses optional).","By the zero-product property, the roots are "+r.join(" and ")+"."
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
        return mc("Cross or touch","Near $x="+root+"$, a polynomial has the factor $"+factor(root)+"^"+m+"$. What does its graph do there?",
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
          "Divide the numerator by $(x-"+b+")$.","The quotient is $x"+signed(c)+"$ and the remainder is "+r+".",
          "Thus $f(x)=x"+signed(c)+"+"+"("+r+")/(x-"+b+")$; the asymptote is $y=x"+signed(c)+"$."
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
          "The right side must be nonnegative, requiring $x\\ge"+d+"$.","Square both sides: $x+("+c+")=(x-"+d+")^2$.","The quadratic has candidate roots "+x+" and "+extra+".",
          "The candidate "+extra+" gives a negative right side and is extraneous; "+x+" satisfies the original equality."
        ],"Squaring can introduce candidates with a negative right-hand side; check in the original equation.");
      }},
      {topic:"Extraneous solutions",make:function(){
        var d=ri(-3,5),s=ri(2,5),valid=d+s,c=s*s-d-s,extra=d+1-s;
        return num("Extraneous solutions","After squaring $\\sqrt{x"+(c>=0?"+":"-")+Math.abs(c)+"}=x"+(d>=0?"-":"+")+Math.abs(d)+"$, one candidate is extraneous. Which x-value is EXTRANEOUS?",extra,[
          "The original equation requires $x\\ge"+d+"$ because the right side is $x-"+d+"$.","The squared equation gives "+valid+" and "+extra+".","The candidate "+extra+" is less than "+d+", so it cannot satisfy the original equation."
        ],"Check which algebraic root makes the right-hand side negative.");
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
  window.PRECALC_PROBLEM_BANK=bank;
})();