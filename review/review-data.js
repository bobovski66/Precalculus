/* Student review notes and worked examples for MATH& 141, Modules 1–10. */
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
      ["General transformation","For $g(x)=A f(b(x-h))+k$, a parent point $(u,v)$ becomes $(h+u/b,\\;Av+k)$ when $b\\ne0$."],
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
      "Use the horizontal line test for one-to-one functions, and distinguish onto relative to a stated target set.",
      "Find and verify inverses by solving for the input.",
      "Understand the domain restriction needed for the inverse of $x^2$.",
      "Solve radical equations and reject extraneous candidates."
    ],
    ideas:[
      ["One-to-one","Different inputs produce different outputs; equivalently, each horizontal line hits the graph at most once."],
      ["Onto","A function is onto its chosen codomain when every value in that target set is attained. Onto depends on which target set is specified."],
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
      {title:"Onto depends on the target",question:"Is $f(x)=x^2$ onto when the target is $\\mathbb R$? What if the target is $[0,\\infty)$?",
       steps:["For every real input, $x^2\\ge0$. No negative output is attained, so the map $f:\\mathbb R\\to\\mathbb R$ is not onto.","If the codomain is restricted to $[0,\\infty)$, every target $y\\ge0$ equals $(\\sqrt{y})^2$.","Thus $f:\\mathbb R\\to[0,\\infty)$ is onto, although it is still not one-to-one on all real inputs."],answer:"Not onto $\\mathbb R$; onto $[0,\\infty)$."},
      {title:"Find and check a linear inverse",question:"Invert $f(x)=2x-1$.",
       steps:["Write $y=2x-1$.","Switch variables: $x=2y-1$.","Solve: $y=(x+1)/2$.","Compose: $f^{-1}(f(x))=((2x-1)+1)/2=x$."],answer:"$f^{-1}(x)=(x+1)/2$."},
      {title:"Invert the restricted parabola",question:"For $f(x)=(x-2)^2+3$ with domain $x\\ge2$, find $f^{-1}$.",
       steps:["Write $y=(x-2)^2+3$ and rearrange: $y-3=(x-2)^2$.","Since the original domain has $x\\ge2$, choose the nonnegative square-root branch.","Solve $x=2+\\sqrt{y-3}$, then interchange variable names.","The inverse domain is $x\\ge3$, the range of the original function."],answer:"$f^{-1}(x)=2+\\sqrt{x-3}$, for $x\\ge3$."},
      {title:"Check after squaring",question:"Solve $\\sqrt{x+5}=x-1$.",
       steps:["Since the left side is nonnegative, any solution must satisfy $x\\ge1$.","Square: $x+5=(x-1)^2=x^2-2x+1$.","Rearrange and factor: $x^2-3x-4=(x-4)(x+1)=0$.","Test both candidates in the original equation: $x=4$ works, but $x=-1$ gives $2=-2$, which is false."],answer:"Only $x=4$ is a solution."}
    ]
  }
];

window.PRECALC_REVIEW_MODULES.push(...[
  {
    "id": 6,
    "title": "Exponential functions",
    "short": "Exponentials",
    "summary": "An exponential model multiplies by the same factor over equal input steps. Use that pattern to build growth and decay models, interpret continuous rates, and count half-lives.",
    "note": "../notes/Precalc_Week6.pdf",
    "objectives": [
      "Distinguish constant differences from constant ratios in a table.",
      "Build and interpret models of the form $A b^t$ and $A e^{kt}$.",
      "Sketch growth and decay and identify their intercepts and asymptotes.",
      "Rewrite an exponential using base $e$ and find amounts or elapsed half-lives."
    ],
    "ideas": [
      [
        "Constant ratio",
        "For $f(t)=A b^t$ with $A>0$, $b>0$, and $b\\ne1$, increasing $t$ by 1 multiplies the output by $b$."
      ],
      [
        "Growth or decay",
        "$b>1$ gives growth; $0<b<1$ gives decay. A decrease of 20% means multiply by $0.80$."
      ],
      [
        "Continuous growth",
        "$A(t)=A_0e^{kt}$. Positive $k$ means growth and negative $k$ means decay. The per-unit factor is $e^k$."
      ],
      [
        "Change of base",
        "$b^t=e^{t\\ln b}$, so the continuous rate is $k=\\ln b$."
      ],
      [
        "Half-life",
        "$M(t)=M_0(1/2)^{t/T}$, where $T$ is the half-life and $t/T$ counts elapsed half-lives."
      ]
    ],
    "pitfalls": [
      "A 4% continuous rate uses $e^{0.04t}$; a 4% increase per year uses $(1.04)^t$.",
      "A negative exponent does not make the output negative.",
      "In a table, compare ratios only over equal input steps.",
      "An exponential approaches its horizontal asymptote without reaching it."
    ],
    "examples": [
      {
        "title": "Read a model from a table",
        "question": "At $t=0,1,2,3$, the outputs are $5,10,20,40$. Find a model and compare it with $5,8,11,14$.",
        "steps": [
          "The first table has equal ratios $10/5=20/10=40/20=2$.",
          "The initial value is 5, giving $f(t)=5(2)^t$.",
          "The second table has equal differences of 3, giving the linear model $g(t)=5+3t$."
        ],
        "answer": "The first is exponential; the second is linear."
      },
      {
        "title": "Sketch growth and decay",
        "question": "Compare $3^x$ and $3^{-x}$: intercept, direction, domain, range, and asymptote.",
        "steps": [
          "At $x=0$, each output is 1. Both pass through $(0,1)$.",
          "$3^x$ increases; $3^{-x}=(1/3)^x$ decreases. Opposite inputs exchange their values, reflecting the graphs across the $y$-axis.",
          "Every real input is allowed; every output is positive. Both have horizontal asymptote $y=0$, approached on opposite ends."
        ],
        "answer": "Domain $\\mathbb R$ and range $(0,\\infty)$ for both; neither graph crosses $y=0$."
      },
      {
        "title": "Interpret a continuous rate",
        "question": "An account follows $A(t)=1000e^{0.04t}$, with $t$ in years. Find the balance after 10 years and the one-year multiplication factor.",
        "steps": [
          "Substitute $t=10$: $A(10)=1000e^{0.4}$.",
          "This is approximately 1491.82 dollars. Round only after evaluating.",
          "The one-year factor is $e^{0.04}\\approx1.04081$, corresponding to about 4.081% growth per year."
        ],
        "answer": "About 1491.82 dollars after 10 years."
      },
      {
        "title": "Rewrite a decay model",
        "question": "Write $(0.8)^t$ as $e^{kt}$ and interpret $k$.",
        "steps": [
          "Use $b^t=e^{t\\ln b}$.",
          "Here $k=\\ln(0.8)\\approx-0.2231$.",
          "The negative continuous rate means decay. The model retains 80% of its amount in each unit of time."
        ],
        "answer": "$(0.8)^t=e^{t\\ln(0.8)}\\approx e^{-0.2231t}$."
      },
      {
        "title": "Count half-lives",
        "question": "A 64-gram sample has a half-life of 10 years. How much remains after 30 years? When does it reach 8 grams?",
        "steps": [
          "Thirty years is $30/10=3$ half-lives.",
          "Halve three times: $64\\to32\\to16\\to8$. Equivalently, $M(30)=64(1/2)^3=8$.",
          "Since 8 grams is one-eighth of 64 grams, it occurs after three half-lives, or 30 years."
        ],
        "answer": "8 grams after 30 years; the model reaches 8 grams at 30 years."
      }
    ],
    "exercises": "In the reading, try Exercises 1–3 for tables and graphs, 4–7 for continuous growth and base $e$, and 8–12 for half-life models. Explain what the rate or factor means in each situation."
  },
  {
    "id": 7,
    "title": "Logarithms",
    "short": "Logarithms",
    "summary": "A logarithm answers an exponent question. Use that interpretation first, then use logarithm laws and change of base to solve equations and make sense of logarithmic measurements.",
    "note": "../notes/Precalc_Week7.pdf",
    "objectives": [
      "Convert between exponential and logarithmic statements.",
      "Evaluate logarithms and explain their domains and graphs.",
      "Expand and combine logarithms with the product, quotient, and power laws.",
      "Use change of base to solve exponential equations and measure information in bits."
    ],
    "ideas": [
      [
        "Exponent question",
        "$\\log_b y=x$ means $b^x=y$, with $b>0$, $b\\ne1$, and $y>0$."
      ],
      [
        "Inverse graphs",
        "$b^x$ and $\\log_b x$ reflect across $y=x$. The logarithm has domain $(0,\\infty)$ and vertical asymptote $x=0$."
      ],
      [
        "Logarithm laws",
        "For positive $M,N$, $\\log_b(MN)=\\log_b M+\\log_b N$, $\\log_b(M/N)=\\log_b M-\\log_b N$, and $\\log_b(M^r)=r\\log_b M$."
      ],
      [
        "Change of base",
        "$\\log_b a=\\ln a/\\ln b$."
      ],
      [
        "Information",
        "Identifying one of $N$ equally likely outcomes carries $\\log_2 N$ bits. An event with probability $p$ carries $-\\log_2 p$ bits when it occurs."
      ]
    ],
    "pitfalls": [
      "$\\log(M+N)$ has no corresponding sum law.",
      "A logarithm can be negative; its real argument must be positive.",
      "$\\ln x$ means base $e$; in this course $\\log x$ means base 10.",
      "Check candidate solutions against every original logarithm argument."
    ],
    "examples": [
      {
        "title": "Ask for the exponent",
        "question": "Evaluate $\\log_3 81$, $\\log_{10}(0.01)$, and $\\log_2(1/16)$.",
        "steps": [
          "$3^4=81$, so $\\log_3 81=4$.",
          "$10^{-2}=0.01$, so $\\log_{10}(0.01)=-2$.",
          "$2^{-4}=1/16$, so $\\log_2(1/16)=-4$."
        ],
        "answer": "$4,-2,-4$, respectively."
      },
      {
        "title": "Expand and combine",
        "question": "For $x,y>0$, expand $\\ln(\\sqrt{x}/y^4)$ and combine $2\\ln x-\\tfrac12\\ln y$.",
        "steps": [
          "Use the quotient law: $\\ln(\\sqrt{x}/y^4)=\\ln(x^{1/2})-\\ln(y^4)$.",
          "Bring down the powers: $\\tfrac12\\ln x-4\\ln y$.",
          "For the second expression, move coefficients to powers and combine the difference: $\\ln(x^2)-\\ln(y^{1/2})=\\ln(x^2/\\sqrt y)$."
        ],
        "answer": "$\\tfrac12\\ln x-4\\ln y$; $\\ln(x^2/\\sqrt y)$."
      },
      {
        "title": "Solve an exponential equation",
        "question": "Solve $2^x=15$, giving an exact expression and a decimal approximation.",
        "steps": [
          "Take natural logarithms: $\\ln(2^x)=\\ln15$.",
          "Use the power law: $x\\ln2=\\ln15$.",
          "Divide by $\\ln2$: $x=\\ln15/\\ln2\\approx3.9069$."
        ],
        "answer": "$x=\\log_2 15=\\ln15/\\ln2\\approx3.9069$."
      },
      {
        "title": "Solve and check the domain",
        "question": "Solve $\\ln(x-1)+\\ln(x+1)=\\ln8$.",
        "steps": [
          "Both arguments must be positive, so $x>1$.",
          "Combine: $\\ln((x-1)(x+1))=\\ln8$, so $x^2-1=8$.",
          "The candidates are $x=\\pm3$. Only $x=3$ satisfies the original domain.",
          "Check: $\\ln2+\\ln4=\\ln8$."
        ],
        "answer": "$x=3$."
      },
      {
        "title": "Count information in bits",
        "question": "A fair six-sided die and a fair four-sided die are rolled independently. How many outcomes are there, and how many bits identify the pair?",
        "steps": [
          "Independence gives $6\\cdot4=24$ equally likely pairs.",
          "The information is $\\log_2 24=\\ln24/\\ln2\\approx4.5850$ bits.",
          "The product law gives $\\log_2(6\\cdot4)=\\log_2 6+\\log_2 4$. The information contributions add."
        ],
        "answer": "24 outcomes, approximately 4.5850 bits. An event with probability $1/64$ similarly carries 6 bits."
      }
    ],
    "exercises": "Use Exercises 1–3 for inverse relationships, 4–6 for logarithm laws, 7–8 for change of base and equations, and 9–12 for information. Include the exact expression before rounding."
  },
  {
    "id": 8,
    "title": "Function composition and substitution",
    "short": "Composition",
    "summary": "Follow an input through several calculations. The order determines the result, each stage can restrict the domain, and a repeated inner expression can turn an unfamiliar equation into familiar algebra.",
    "note": "../notes/Precalc_Week8.html",
    "objectives": [
      "Evaluate and compare compositions using rules, tables, and units.",
      "Decompose a formula into inner and outer functions.",
      "Find the domain by checking every stage of a calculation.",
      "Undo layers and use substitutions to solve composite equations.",
      "Explain symmetry, extrema, range, and end behavior from the component functions."
    ],
    "ideas": [
      [
        "Order",
        "$(f\\circ g)(x)=f(g(x))$: apply $g$ first. This is different from multiplying $f(x)g(x)$."
      ],
      [
        "Allowed inputs",
        "Require $x$ in the domain of $g$ and $g(x)$ in the domain of $f$."
      ],
      [
        "Undoing",
        "$\\ln(e^x)=x$ for all real $x$, but $e^{\\ln x}=x$ requires $x>0$. Also $\\sqrt{x^2}=|x|$."
      ],
      [
        "Temporary variable",
        "For $u=e^x$, require $u>0$. For $u=\\ln x$, require $x>0$ but $u$ can be any real number."
      ],
      [
        "Graph structure",
        "Squaring makes opposite inputs agree. In $e^{-x^2}$ this gives symmetry, a maximum of 1, and outputs approaching zero at both ends."
      ]
    ],
    "pitfalls": [
      "The outside function is applied last.",
      "A simplified formula keeps restrictions inherited from the original expression.",
      "A missing table entry does not mean the output is zero.",
      "After solving for a temporary variable, return to the original variable and check restrictions."
    ],
    "examples": [
      {
        "title": "Change the order",
        "question": "For $f(x)=x^2$ and $g(x)=x+3$, find both compositions and evaluate them at 1.",
        "steps": [
          "$f(g(x))=(x+3)^2$, since we add 3 before squaring.",
          "$g(f(x))=x^2+3$, since we square before adding 3.",
          "At $x=1$, these give 16 and 4, respectively. The product is a third operation: $f(1)g(1)=4$."
        ],
        "answer": "$(f\\circ g)(x)=(x+3)^2$ and $(g\\circ f)(x)=x^2+3$."
      },
      {
        "title": "Track the domain",
        "question": "Find the domains of $\\ln(4-x^2)$, $\\sqrt{\\ln x}$, and $1/(\\ln x)$.",
        "steps": [
          "For the first, $4-x^2>0$ gives $-2<x<2$.",
          "For the second, first require $x>0$, then $\\ln x\\ge0$. Together these give $x\\ge1$.",
          "For the third, require $x>0$ and $\\ln x\\ne0$, so exclude $x=1$."
        ],
        "answer": "$(-2,2)$; $[1,\\infty)$; $(0,1)\\cup(1,\\infty)$."
      },
      {
        "title": "Undo one layer at a time",
        "question": "Solve $\\ln(x^2+1)=\\ln10$.",
        "steps": [
          "The argument $x^2+1$ is positive for every real input.",
          "The logarithm is one-to-one, so $x^2+1=10$.",
          "Then $x^2=9$, giving $x=\\pm3$. Both check in the original equation."
        ],
        "answer": "$x=-3$ or $x=3$."
      },
      {
        "title": "A quadratic hidden in an exponential",
        "question": "Solve $e^{2x}+e^x-6=0$.",
        "steps": [
          "Let $u=e^x>0$. Then $e^{2x}=u^2$.",
          "Factor $u^2+u-6=(u+3)(u-2)=0$.",
          "Discard $u=-3$ because $e^x$ is positive. From $e^x=2$, obtain $x=\\ln2$."
        ],
        "answer": "$x=\\ln2$."
      },
      {
        "title": "A quadratic hidden in a logarithm",
        "question": "Solve $(\\ln x)^2-5\\ln x+6=0$.",
        "steps": [
          "The original domain is $x>0$. Set $u=\\ln x$.",
          "Factor $(u-2)(u-3)=0$, giving $u=2$ or $u=3$.",
          "Translate back: $\\ln x=2$ or 3, so $x=e^2$ or $e^3$. Both are positive."
        ],
        "answer": "$x=e^2$ or $x=e^3$."
      },
      {
        "title": "Compose a physical model",
        "question": "A cart is $d(t)=2+0.5t$ meters from a light, for $t\\ge0$. A relative reading is $L(d)=100/d^2$. Find the reading after 4 seconds.",
        "steps": [
          "The distance is calculated first: $L(d(t))=100/(2+0.5t)^2$.",
          "The physical domain is $t\\ge0$, where the distance is positive.",
          "At $t=4$, $d=4$ meters, giving $L=100/16=6.25$.",
          "As the cart moves away, the reading decreases toward zero."
        ],
        "answer": "A relative reading of 6.25 after 4 seconds."
      }
    ],
    "exercises": "Try Exercises 1–4 for order, tables, and decomposition; 5–6 for domains; 7–9 for equations; and 10–12 for graphs, applications, and input changes. For Exercise 10, explain each graph feature in words."
  },
  {
    "id": 9,
    "title": "Systems of linear equations",
    "short": "Systems",
    "summary": "A solution must make all the equations true at once. Use substitution or elimination to find it, and use geometry to recognize when the equations have one solution, none, or infinitely many.",
    "note": "../notes/Precalc_Week9.html",
    "objectives": [
      "Interpret simultaneous equations as intersections of lines or planes.",
      "Solve two-variable systems by substitution and elimination.",
      "Reduce three-variable systems to triangular form and use back-substitution.",
      "Recognize contradictions, dependent equations, and free parameters.",
      "Build systems from quantities with units and check the resulting answers."
    ],
    "ideas": [
      [
        "One solution",
        "Nonparallel lines meet once. In three variables, the equations can determine a single point common to all planes."
      ],
      [
        "No solution",
        "A contradiction such as $0=6$ means no values satisfy every equation."
      ],
      [
        "Infinitely many",
        "A dependent equation adds no condition. If a variable remains free and there is no contradiction, describe the family with a parameter."
      ],
      [
        "Elimination",
        "Add a multiple of one equation to another to remove a variable. Keep the other equations."
      ],
      [
        "Back-substitution",
        "In triangular form, solve the bottom equation first, then substitute upward."
      ]
    ],
    "pitfalls": [
      "A proposed answer must satisfy every original equation.",
      "Multiply every term on both sides when scaling an equation.",
      "An identity such as $0=0$ is not a contradiction.",
      "In an application, an algebraic solution must also meet conditions such as nonnegative amounts."
    ],
    "examples": [
      {
        "title": "Substitute, then check",
        "question": "Solve $x+y=5$ and $2x-y=1$.",
        "steps": [
          "From the first equation, $y=5-x$.",
          "Substitute into the second: $2x-(5-x)=1$, so $3x=6$ and $x=2$.",
          "Then $y=3$. Check: $2+3=5$ and $2(2)-3=1$."
        ],
        "answer": "The unique solution is $(2,3)$."
      },
      {
        "title": "Recognize a contradiction",
        "question": "Solve and classify $3x-y=2$ and $6x-2y=10$.",
        "steps": [
          "Double the first equation to obtain $6x-2y=4$.",
          "The second equation requires the same left side to equal 10. Subtracting gives $0=6$.",
          "The lines are distinct and parallel; they have no common point."
        ],
        "answer": "No solution."
      },
      {
        "title": "Name an entire solution family",
        "question": "Solve $x-2y=4$ and $-2x+4y=-8$.",
        "steps": [
          "The second equation is $-2$ times the first, so it adds no new condition.",
          "Choose $y=t$, with $t$ any real number. The first equation gives $x=4+2t$.",
          "Every pair $(4+2t,t)$ satisfies both equations."
        ],
        "answer": "Infinitely many solutions: $(x,y)=(4+2t,t)$, $t\\in\\mathbb R$."
      },
      {
        "title": "Eliminate in three variables",
        "question": "Solve $x+y+z=4$, $2x+y-z=3$, and $x-2y+3z=11$.",
        "steps": [
          "Subtract twice the first equation from the second: $-y-3z=-5$.",
          "Subtract the first from the third: $-3y+2z=7$.",
          "Subtract three times the new second equation from the new third: $11z=22$, so $z=2$.",
          "Back-substitute: $-y-6=-5$ gives $y=-1$; then $x-1+2=4$ gives $x=3$.",
          "Check: $3-1+2=4$, $6-1-2=3$, and $3+2+6=11$."
        ],
        "answer": "$(x,y,z)=(3,-1,2)$."
      },
      {
        "title": "Turn ticket sales into equations",
        "question": "Adult tickets cost 12 dollars and child tickets cost 8 dollars. A total of 200 tickets brings in 2000 dollars. How many of each were sold?",
        "steps": [
          "Let $a$ count adult tickets and $c$ count child tickets.",
          "The count equation is $a+c=200$; the revenue equation is $12a+8c=2000$.",
          "Subtract 8 times the first equation from the second: $4a=400$, so $a=100$. Then $c=100$.",
          "Check both the ticket count and revenue: $100+100=200$ and $1200+800=2000$."
        ],
        "answer": "100 adult tickets and 100 child tickets."
      }
    ],
    "exercises": "Use Exercises 1–6 to connect geometry with the three solution types, 7–9 for three-variable systems, and 10–11 for modeling. Exercise 12 asks you to explain why the permitted equation operations preserve solutions."
  },
  {
    "id": 10,
    "title": "Matrices and Gaussian elimination",
    "short": "Matrices",
    "summary": "A matrix keeps the coefficients of a system organized while you eliminate variables. Learn to read the equations behind each row, make a staircase of pivots, and interpret the remaining freedom or contradictions.",
    "note": "../notes/Precalc_Week10.html",
    "objectives": [
      "Translate systems into augmented matrices, including zero coefficients.",
      "Apply the three elementary row operations to entire rows.",
      "Reach echelon form and solve by back-substitution.",
      "Identify pivots, free variables, and inconsistent rows.",
      "Use systems in circuits, conservation models, and quadratic fitting."
    ],
    "ideas": [
      [
        "Augmented matrix",
        "Keep variable columns in a fixed order. The final column contains constants, separated by a bar."
      ],
      [
        "Legal row operations",
        "Swap rows, multiply a row by a nonzero number, or add a multiple of a different row. Apply the operation to the constant column too."
      ],
      [
        "Echelon form",
        "Nonzero rows come first; each leading entry is farther right than the one above it; entries below each leading entry are zero."
      ],
      [
        "Read the outcome",
        "A row $[0\\ 0\\ 0\\mid c]$, $c\\ne0$, is a contradiction. With no contradiction, a pivot in every variable column gives one solution; a free variable gives infinitely many."
      ],
      [
        "Modeling connection",
        "Conservation laws produce linear equations. Fitting $y=ax^2+bx+c$ is also linear in the unknown coefficients $a,b,c$."
      ]
    ],
    "pitfalls": [
      "A missing variable gets coefficient zero; do not shift the remaining entries left.",
      "An all-zero row by itself does not decide the number of solutions in every rectangular system.",
      "A zero in a pivot position may require a row swap.",
      "Echelon form need not have pivots equal to 1 or zeros above every pivot."
    ],
    "examples": [
      {
        "title": "Translate and perform a row operation",
        "question": "Write the matrix for $x+3y=5$, $2x+y=4$, then apply $R_2\\leftarrow R_2-2R_1$.",
        "steps": [
          "The augmented matrix is $\\left[\\begin{array}{cc|c}1&3&5\\\\2&1&4\\end{array}\\right]$.",
          "Calculate every entry in the new second row: $2-2(1)=0$, $1-2(3)=-5$, $4-2(5)=-6$.",
          "The result is $\\left[\\begin{array}{cc|c}1&3&5\\\\0&-5&-6\\end{array}\\right]$.",
          "Thus $y=6/5$ and $x=5-3(6/5)=7/5$."
        ],
        "answer": "$(x,y)=(7/5,6/5)$."
      },
      {
        "title": "Carry a matrix to echelon form",
        "question": "Solve $\\left[\\begin{array}{ccc|c}1&1&1&4\\\\2&1&-1&3\\\\1&-2&3&11\\end{array}\\right]$.",
        "steps": [
          "Use $R_2\\leftarrow R_2-2R_1$ and $R_3\\leftarrow R_3-R_1$. The bottom rows become $[0\\ -1\\ -3\\mid-5]$ and $[0\\ -3\\ 2\\mid7]$.",
          "Use $R_3\\leftarrow R_3-3R_2$ to get $[0\\ 0\\ 11\\mid22]$.",
          "The echelon matrix is $\\left[\\begin{array}{ccc|c}1&1&1&4\\\\0&-1&-3&-5\\\\0&0&11&22\\end{array}\\right]$.",
          "Read upward: $z=2$, then $y=-1$, then $x=3$."
        ],
        "answer": "$(3,-1,2)$, agreeing with elimination on the equations."
      },
      {
        "title": "Distinguish a contradiction from a free variable",
        "question": "Classify $A=\\left[\\begin{array}{cc|c}1&-2&3\\\\0&0&14\\end{array}\\right]$ and $B=\\left[\\begin{array}{cc|c}1&2&3\\\\0&0&0\\end{array}\\right]$.",
        "steps": [
          "In $A$, the bottom row says $0=14$, so no solution exists.",
          "In $B$, the bottom row says $0=0$ and adds no information.",
          "For $B$, let $y=t$. The top row gives $x=3-2t$."
        ],
        "answer": "$A$: no solution. $B$: infinitely many solutions $(3-2t,t)$."
      },
      {
        "title": "Check a circuit model",
        "question": "Currents satisfy $I_1-I_2-I_3=0$, $I_1+2I_2=10$, and $2I_2+3I_3=9$. Find all three.",
        "steps": [
          "Write $\\left[\\begin{array}{ccc|c}1&-1&-1&0\\\\1&2&0&10\\\\0&2&3&9\\end{array}\\right]$.",
          "Use $R_2\\leftarrow R_2-R_1$ to get second row $[0\\ 3\\ 1\\mid10]$.",
          "Scale row 3 by 3, then subtract twice row 2: the new third row is $[0\\ 0\\ 7\\mid7]$.",
          "Thus $I_3=1$, $I_2=3$, and $I_1=4$.",
          "Check: $4=3+1$, $4+2(3)=10$, and $2(3)+3(1)=9$."
        ],
        "answer": "$(I_1,I_2,I_3)=(4,3,1)$ amperes."
      },
      {
        "title": "Recover a function from three points",
        "question": "Find $y=ax^2+bx+c$ through $(0,2)$, $(1,5)$, and $(3,23)$.",
        "steps": [
          "Substitute the points to obtain $c=2$, $a+b+c=5$, and $9a+3b+c=23$.",
          "In column order $a,b,c$, the matrix is $\\left[\\begin{array}{ccc|c}0&0&1&2\\\\1&1&1&5\\\\9&3&1&23\\end{array}\\right]$. Swap the first two rows to obtain a convenient first pivot.",
          "Use $c=2$ to reduce to $a+b=3$ and $3a+b=7$. Subtraction gives $2a=4$.",
          "Then $a=2$, $b=1$, $c=2$. Substituting the three original inputs checks the fit."
        ],
        "answer": "$y=2x^2+x+2$."
      },
      {
        "title": "Find the physical part of a solution family",
        "question": "A traffic model gives $x_1=t$, $x_2=800-t$, $x_3=600-t$, and $x_4=t$, in cars per hour. Which values of $t$ are physically possible?",
        "steps": [
          "Nonnegative $x_1$ and $x_4$ require $t\\ge0$.",
          "Nonnegative $x_2$ requires $t\\le800$; nonnegative $x_3$ requires $t\\le600$.",
          "All conditions must hold at once, so the stricter upper bound is 600."
        ],
        "answer": "$0\\le t\\le600$ cars per hour."
      }
    ],
    "exercises": "Try Exercises 1–3 for notation and row operations, 4–7 for elimination and parameter families, 8–9 for classification, and 10–12 for conservation models and explanations. Revisit the reading’s traffic and quadratic-fitting examples as well."
  }
]);
