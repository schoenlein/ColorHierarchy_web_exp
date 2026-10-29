

/*----------------------------------COLOR CALIBRATION ------------------------------------ */

function colorCalibration_srgb() {



/*----------------------------------Part 2: ENTER DESIRED COLOR COORDINATES IN xyY ------------------------------------ */

numColors = 19 //currently includes background color - as last color, 

R = [105,
155,
221,
238,
240,
228,
184,
156,
106,
148,
115,
39,
194,
244,
209,
124,
33,
138,
121
]


G =  [167,
156,
136,
130,
135,
144,
164,
172,
64,
43,
73,
94,
145,
130,
154,
179,
81,
57,
121
]


B = [
245,
238,
199,
173,
120,
99,
82,
89,
133,
66,
3,
27,
222,
146,
86,
105,
152,
33,
121
]



  var Rval = new Array(numColors).fill(0)
  var Gval = new Array(numColors).fill(0)
  var Bval = new Array(numColors).fill(0)
  

  for (var i = 0; i<numColors; i++){
    Rval[i] = Math.round(R[i]);
    Gval[i] = Math.round(G[i]);
    Bval[i] = Math.round(B[i]);
  }




// Set background color to gray - last color in calibration list //
document.body.style.backgroundColor = "rgb("+Rval[numColors-1]+","+Gval[numColors-1]+","+Bval[numColors-1]+")" 

rBackground = Rval[numColors-1]
gBackground = Gval[numColors-1]
bBackground = Bval[numColors-1]

var promptedColorR1 = Rval
var promptedColorG1 = Gval
var promptedColorB1 = Bval


return {"Red":promptedColorR1, "Green":promptedColorG1, "Blue":promptedColorB1}


//----------- END OF COLOR CALIBRATION -----------------// 
}

