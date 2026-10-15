/* Student review notes and worked examples for MATH& 141, Modules 1–5. */
window.PRECALC_REVIEW_MODULES = [
  {
    id:1, title:"Functions and transformations", short:"Functions",
    summary:"Begin with input-output relationships. Learn how formulas, point sets, and graphs describe the same function, then move a parent curve without losing its structure.",
    note:"../notes/Precalc_Week1.pdf",
    objectives:[
      "Find a domain and range from a relation or formula.",
      "Distinguish a function from a relation that assigns multiple outputs to one input.",
      "Evaluate functions at numbers and at expressions.",
      "Read horizontal and vertical transformations of parent functions.",
      "Track individual points through a transformation."
    ],
    ideas:[
      ["Function test","Every input has exactly one output. A repeated output is allowed; a repeated input with conflicting outputs is not."],
      ["Domain and range","Domain = allowed inputs; range = outputs actually attained. A set lists each value once."],
      ["Substitution","Evaluate $f(u)$ by replacing every $x$ in the rule with the entire input $u$."],
      ["General transformation","For $g(x)=A f(b(x-h))+k$, a parent point $(u,v)$ becomes $(h+u/b,\;Av+k)$ when $b\\ne0$."],
      ["Parent graphs","Recognize the qualitative shapes of lines, parabolas, absolute value, square root, reciprocal, and cubic functions."]
    ],
    pitfalls:[
      "A relation can repeat a $y$-value and still be a function.",
      "Inside changes reverse direction: $f(x-3)$ shifts right 3.",
      "When substituting $x+1$, place the entire expression in parentheses.",
      "A horizontal factor of 2 compresses distances by $1/2$, rather than doubling them."
    ],
    examples:[
      {title:"Domain and range from a point cloud",question:"For $R=\\{(-2,4),(0,0),(1,1),(2,4)\\}$, give its domain and range. Is it a function?",
       steps:["The domain consists of first coordinates: $\\{-2,0,1,2\\}$.","The range consists of distinct second coordinates: $\\{0,1,4\\}$. We list 4 just once.","No input is assigned two different outputs; the relation is a function."],answer:"Domain $\\{-2,0,1,2\\}$; range $\\{0,1,4\\}$; yes, a function."},
      {title:"Substitute an expression",question:"Given $f(x)=x^2-3x+1$, find $f(a+1)$.",
       steps:["Replace each $x$ with $(a+1)$: $f(a+1)=(a+1)^2-3(a+1)+1$.","Expand: $a^2+2a+1-3a-3+1$.","Combine like terms: $a^2-a-1$."],answer:"$f(a+1)=a^2-a-1$."},
      {title:"Translate a parabola",question:"Describe the graph of $g(x)=-2(x-3)^2+4$ relative to $f(x)=x^2$, and locate the vertex.",
       steps:["The $(x-3)$ shifts the graph right 3.","The factor $-2$ reflects across the $x$-axis and stretches outputs by 2.","The $+4$ shifts the graph up 4; its vertex is $(3,4)$."],answer:"Right 3, vertical stretch by 2, reflect, up 4; vertex $(3,4)$."},
      {title:"Horizontal scaling and the radical endpoint",question:"For $g(x)=3\\sqrt{2(x-1)}+4$, locate its starting point and describe its transformations.",
       steps:["Start with $f(x)=\\sqrt{x}$, which begins at $(0,0)$.","Inside: $2(x-1)$ compresses horizontally by $1/2$ and shifts right 1.","Outside: 3 stretches vertically and 4 moves the graph up.","The radicand becomes zero at $x=1$, giving $g(1)=4$."],answer:"Starting point $(1,4)$; domain $x\\ge1$."},
      {title:"Follow a point, not just the curve",question:"The graph of $f$ contains $(2,5)$. Where does that point land on $g(x)=-3f(2(x-4))+1$?",
       steps:["A new $x$-coordinate satisfies $2(x-4)=2$, so $x=5$.","The new output is $-3(5)+1=-14$.","The horizontal coordinate is transformed inside the function; the vertical coordinate is transformed outside."],answer:"$(5,-14)$."}
    ]
  },
  {
    id:2, title:"Lines and parabolas", short:"Lines & parabolas",
    summary:"Treat slope as constant rate of change and parabolas as quadratic models. Connect three descriptions of a quadratic: expanded, vertex, and factored forms.",
    note:"../notes/Precalc_Week2.pdf",
    objectives:[
      "Find the slope and equation of a line from two points.",
      "Distinguish vertical lines from functions.",
      "Fit a quadratic to three points.",
      "Complete the square and locate the vertex.",
      "Determine roots from factoring or the quadratic formula."
    ],
    ideas:[
      ["Slope","For distinct $x$-coordinates, $m=(y_2-y_1)/(x_2-x_1)$."],
      ["Line forms","Point-slope: $y-y_1=m(x-x_1)$; slope-intercept: $y=mx+b$."],
      ["Quadratic forms","Standard: $ax^2+bx+c$; vertex: $a(x-h)^2+k$; factored: $a(x-r_1)(x-r_2)$."],
      ["Vertex","$h=-b/(2a)$ and $k=f(h)$, provided $a\\ne0$."],
      ["Roots and discriminant","$x=(-b\\pm\\sqrt{b^2-4ac})/(2a)$; the discriminant predicts how many real roots occur."]
    ],
    pitfalls:[
      "The slope of a vertical line is undefined, not zero.",
      "When completing the square with $a\\ne1$, factor out $a$ first.",
      "The vertex's $x$-coordinate is $-b/(2a)$, not $-b/a$.",
      "A root is an input where $f(x)=0$; the vertex need not be a root."
    ],
    examples:[
      {title:"From two points to a line",question:"Find the line through $(2,1)$ and $(6,4)$.",
       steps:["Compute the slope $m=(4-1)/(6-2)=3/4$.","Use point-slope form: $y-1=\\frac34(x-2)$.","Distribute: $y=\\frac34x-\\frac32+1=\\frac34x-\\frac12$.","Check that both original points satisfy the equation."],answer:"$y=\\frac34x-\\frac12$."},
      {title:"Fit a parabola through three points",question:"Find $f(x)=ax^2+bx+c$ through $(0,1)$, $(1,0)$, and $(2,3)$.",
       steps:["At $x=0$, $c=1$.","At $x=1$, $a+b+c=0$, so $a+b=-1$.","At $x=2$, $4a+2b+c=3$, so $2a+b=1$.","Subtract the equations: $a=2$ and therefore $b=-3$."],answer:"$f(x)=2x^2-3x+1$."},
      {title:"Complete the square",question:"Rewrite $f(x)=2x^2-12x+19$ in vertex form.",
       steps:["Factor 2 from the variable terms: $2(x^2-6x)+19$.","Half of $-6$ is $-3$; its square is 9.","Write $2[(x-3)^2-9]+19$.","Simplify to $2(x-3)^2+1$."],answer:"$f(x)=2(x-3)^2+1$, with vertex $(3,1)$."},
      {title:"Read roots from factors",question:"Factor $x^2-x-6$, find its zeros, and check their midpoint.",
       steps:["Find integers with product $-6$ and sum $-1$: $-3$ and 2.","Thus $x^2-x-6=(x-3)(x+2)$.","Its roots are $3$ and $-2$. Their midpoint is $1/2$, the vertex's horizontal coordinate."],answer:"Roots $-2$ and $3$; vertex axis $x=1/2$."},
      {title:"Use the quadratic formula",question:"Solve $2x^2-3x+1=0$.",
       steps:["Identify $a=2$, $b=-3$, and $c=1$.","Compute $\\Delta=b^2-4ac=9-8=1$.","Use $x=(3\\pm\\sqrt1)/4=(3\\pm1)/4$.","Simplify each choice."],answer:"$x=1$ or $x=1/2$."}
    ]
  },
  {
    id:3, title:"Polynomials and their shape", short:"Polynomials",
    summary:"Read a polynomial globally from its degree, leading coefficient, zeros, and multiplicities. Assemble the graph's behavior from a sign chart.",
    note:"../notes/Precalc_Week3.pdf",
    objectives:[
      "Recognize polynomial degree and leading coefficient.",
      "Determine both ends from the leading term.",
      "Read roots and multiplicities from a factorization.",
      "Determine whether a graph crosses or touches at a root.",
      "Build sign charts and combine their evidence into a qualitative graph."
    ],
    ideas:[
      ["Leading term","For large $|x|$, the leading term $ax^n$ controls the direction of both ends."],
      ["Even and odd degrees","Even degree: ends point together. Odd degree: ends point opposite ways."],
      ["Multiplicity","Odd multiplicity flips sign at a root; even multiplicity leaves the sign unchanged."],
      ["Sign chart","Zeros cut the real line into intervals. Test one point in each interval and multiply the factor signs."],
      ["Sketch discipline","Determine ends first, then locate the roots, then construct the sign chart, then connect smoothly."]
    ],
    pitfalls:[
      "A double root is still one distinct $x$-intercept.",
      "Do not assume every root causes a sign change.",
      "Only the leading term determines distant end behavior; lower-degree terms shape the middle.",
      "A sign chart describes above/below the axis, not the exact heights of peaks and valleys."
    ],
    examples:[
      {title:"End behavior without graphing",question:"Describe both ends of $f(x)=-2x^5+7x^2-4$.",
       steps:["The leading term is $-2x^5$; the degree is odd.","As $x\\to-\\infty$, $x^5$ is negative and $-2x^5$ is positive.","As $x\\to+\\infty$, $-2x^5$ is negative."],answer:"Up on the left, down on the right."},
      {title:"Multiplicity controls crossing",question:"Analyze the zeros of $f(x)=(x+2)(x-1)^2(x-3)$.",
       steps:["The zeros are $-2$, $1$, and $3$.","The factors at $-2$ and $3$ occur to the first power; the curve crosses at those zeros.","The zero at $1$ has multiplicity two; the curve touches the axis and turns there.","The degree is 4 with positive leading coefficient, so both ends rise."],answer:"Cross at $-2$ and $3$; touch at $1$; both ends up."},
      {title:"Build a sign chart by intervals",question:"Determine the sign of $(x+2)(x-1)^2(x-3)$ between its roots.",
       steps:["Cut the line at $-2$, $1$, and $3$.","Test $x=-3$: $(-)(+)(-)=(+)$ on $(-\\infty,-2)$.","Test $x=0$: $(+)(+)(-)=(-)$ on $(-2,1)$.","Test $x=2$: $(+)(+)(-)=(-)$ on $(1,3)$.","Test $x=4$: $(+)(+)(+)=(+)$ on $(3,\\infty)$."],answer:"Signs $+,-,-,+$ from left to right."},
      {title:"Sketch by assembling the evidence",question:"Describe the path of $f(x)=(x+2)(x-1)^2(x-3)$ from left to right.",
       steps:["Both ends point upward: the degree is even and the leading coefficient is positive.","The curve crosses downward at $-2$, entering negative values.","At $1$, the double root touches the axis but does not change sign.","At $3$, the curve crosses back up, then rises toward $+\\infty$."],answer:"Up left; cross at $-2$; touch at $1$ from below; cross at $3$; up right."},
      {title:"Count degree and crossings",question:"For $p(x)=-4(x+3)^2(x-1)^3(x-4)$, find the degree and count crossing intercepts.",
       steps:["Sum exponents to obtain degree $2+3+1=6$.","The leading coefficient is negative: both ends point down.","The double root at $-3$ only touches the axis.","The roots $1$ and $4$ have odd multiplicities, so each causes a crossing."],answer:"Degree 6; two crossing intercepts; both ends down."}
    ]
  },
  {
    id:4, title:"Rational functions", short:"Rational functions",
    summary:"Locate missing points, zeros, and vertical asymptotes. Use degree comparisons and polynomial division to describe distant behavior, then organize a sign chart.",
    note:"../notes/Precalc_Week4.pdf",
    objectives:[
      "Factor and reduce a rational expression without forgetting its original domain.",
      "Distinguish a removable hole from a vertical asymptote.",
      "Find zeros and sign intervals.",
      "Recognize horizontal and slant asymptotes from degrees.",
      "Use long division to identify the slant asymptote."
    ],
    ideas:[
      ["Zeros","Noncanceled zeros of the numerator are $x$-intercepts."],
      ["Vertical asymptotes","Noncanceled real zeros of the denominator yield vertical asymptotes."],
      ["Holes","A canceled common factor produces a missing input. Substitute that input into the reduced expression to find the hole's height."],
      ["Horizontal asymptotes","Smaller numerator degree: $y=0$. Equal degrees: ratio of leading coefficients."],
      ["Slant asymptotes","If numerator degree is one larger, divide: $f(x)=q(x)+r(x)/d(x)$ with linear $q$."]
    ],
    pitfalls:[
      "Canceling a common factor does not restore the forbidden input to the domain.",
      "A hole is not automatically a zero.",
      "A horizontal asymptote can be crossed; it describes end behavior, not a forbidden height.",
      "Read the degree after accounting for the true leading terms, not the number of written factors alone."
    ],
    examples:[
      {title:"A canceled factor becomes a hole",question:"Analyze $f(x)=\\frac{(x-2)(x+1)}{(x-3)(x+1)}$.",
       steps:["The common factor $(x+1)$ cancels, but the original function is still undefined at $x=-1$.","Away from $-1$, the reduced expression is $(x-2)/(x-3)$.","Its zero is $x=2$; its vertical asymptote is $x=3$.","Substitute $-1$ into the reduced expression: $(-3)/(-4)=3/4$."],answer:"Zero at 2; asymptote $x=3$; hole at $(-1,3/4)$."},
      {title:"Sign chart across a rational asymptote",question:"Where is $f(x)=(x-2)/(x-3)$ positive?",
       steps:["Critical inputs are the zero 2 and the denominator zero 3.","For $x<2$, numerator and denominator are both negative: the quotient is positive.","For $2<x<3$, the numerator is positive and denominator negative: the quotient is negative.","For $x>3$, both are positive: the quotient is positive."],answer:"$(-\\infty,2)\\cup(3,\\infty)$."},
      {title:"Compare degrees at infinity",question:"Find the horizontal asymptote of $f(x)=(3x^2-1)/(2x^2+x+5)$.",
       steps:["Both numerator and denominator have degree 2.","Divide numerator and denominator by $x^2$ to see that lower-order terms shrink at large $|x|$.","The ratio of leading coefficients tends to $3/2$."],answer:"$y=3/2$."},
      {title:"Long division gives a slant line",question:"Find the slant asymptote of $f(x)=(x^2+x-2)/(x-3)$.",
       steps:["Divide $x^2$ by $x$ to begin the quotient: $x$.","Subtract $x(x-3)=x^2-3x$, leaving $4x-2$.","Divide again by $(x-3)$ to get 4 and remainder 10.","Thus $f(x)=x+4+10/(x-3)$, whose remainder term tends to 0."],answer:"$y=x+4$."},
      {title:"Full feature inventory",question:"Analyze $f(x)=(x^2-1)/(x^2-4)$.",
       steps:["Factor: $(x-1)(x+1)/[(x-2)(x+2)]$; no factors cancel.","Zeros occur at $x=-1$ and $x=1$.","Vertical asymptotes occur at $x=-2$ and $x=2$.","Equal degrees with equal leading coefficients give $y=1$ at infinity.","Use $-2,-1,1,2$ as feature points for a sign chart."],answer:"Zeros $\\pm1$; vertical asymptotes $\\pm2$; horizontal asymptote $y=1$; no holes."}
    ]
  },
  {
    id:5, title:"Inverse functions and radicals", short:"Inverses & radicals",
    summary:"Study which functions can be reversed. Find inverses algebraically, track how domains and ranges exchange, and check radical equations for extraneous solutions.",
    note:"../notes/Precalc_Week5.pdf",
    objectives:[
      "Find domains and ranges, including restrictions from denominators and even roots.",
      "Use the horizontal line test for one-to-one functions.",
      "Find and verify inverses by solving for the input.",
      "Understand the domain restriction needed for the inverse of $x^2$.",
      "Solve radical equations and reject extraneous candidates."
    ],
    ideas:[
      ["One-to-one","Different inputs produce different outputs; equivalently, each horizontal line hits the graph at most once."],
      ["Inverses","If $y=f(x)$, interchange $x$ and $y$ and solve for the new $y$."],
      ["Exchange domain and range","The domain of $f^{-1}$ is the range of $f$, and conversely."],
      ["Square root restriction","$x^2$ is invertible as a function after restricting to $x\\ge0$; the inverse is $\\sqrt{x}$."],
      ["Radical equations","Squaring can create solutions to the squared equation that fail the original. Substitute every candidate back."]
    ],
    pitfalls:[
      "$f^{-1}(x)$ means inverse function, not $1/f(x)$.",
      "Without a domain restriction, $x^2$ does not have an inverse function on all real numbers.",
      "An even root requires a nonnegative radicand in real-valued work.",
      "Checking solutions in the squared equation is insufficient; check the original radical equation."
    ],
    examples:[
      {title:"Domain of a radical",question:"Find the domain of $g(x)=\\sqrt{x-3}$ and range of $h(x)=x^2+1$.",
       steps:["For a real square root, the radicand must be nonnegative: $x-3\\ge0$.","Hence the domain of $g$ is $[3,\\infty)$.","Since $x^2\\ge0$ for every real $x$, $h(x)\\ge1$ with equality at 0.","Thus the range of $h$ is $[1,\\infty)$."],answer:"Domain $g$: $[3,\\infty)$; range $h$: $[1,\\infty)$."},
      {title:"Apply the horizontal line test",question:"Why is $f(x)=x^2$ not one-to-one on all real numbers?",
       steps:["The outputs at $x=2$ and $x=-2$ are both 4.","A horizontal line at $y=4$ intersects the parabola at two points.","Restrict the input to $x\\ge0$ or $x\\le0$ to keep only one branch."],answer:"On all reals it is not one-to-one; restriction to one side of the vertex fixes this."},
      {title:"Find and check a linear inverse",question:"Invert $f(x)=2x-1$.",
       steps:["Write $y=2x-1$.","Switch variables: $x=2y-1$.","Solve: $y=(x+1)/2$.","Compose: $f^{-1}(f(x))=((2x-1)+1)/2=x$."],answer:"$f^{-1}(x)=(x+1)/2$."},
      {title:"Invert the restricted parabola",question:"For $f(x)=(x-2)^2+3$ with domain $x\\ge2$, find $f^{-1}$.",
       steps:["Write $y=(x-2)^2+3$ and rearrange: $y-3=(x-2)^2$.","Since the original domain has $x\\ge2$, choose the nonnegative square-root branch.","Solve $x=2+\\sqrt{y-3}$, then interchange variable names.","The inverse domain is $x\\ge3$, the range of the original function."],answer:"$f^{-1}(x)=2+\\sqrt{x-3}$, for $x\\ge3$."},
      {title:"Check after squaring",question:"Solve $\\sqrt{x+5}=x-1$.",
       steps:["Since the left side is nonnegative, any solution must satisfy $x\\ge1$.","Square: $x+5=(x-1)^2=x^2-2x+1$.","Rearrange and factor: $x^2-3x-4=(x-4)(x+1)=0$.","Test both candidates in the original equation: $x=4$ works, but $x=-1$ gives $2=-2$, which is false."],answer:"Only $x=4$ is a solution."}
    ]
  }
];