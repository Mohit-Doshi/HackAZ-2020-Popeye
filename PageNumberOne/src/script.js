var defaultData = [ 
{ 
"name":"SUDARSAN BALAJI",
"email":"smanika1@asu.edu",
"mobile_number":"305-2604",
"skills":[ 
"Sql",
"Javascript",
"C",
"R",
"Html",
"Cryptography",
"Computer science",
"Programming",
"Android",
"Communication",
"Design",
"Scala",
"Wireframing",
"Engineering",
"Ux",
"Operating systems",
"Networking",
"Jupyter",
"Datasets",
"Security",
"C++",
"Reports",
"Spark",
"Queries",
"Matlab",
"Api",
"Excel",
"Statistics",
"Architecture",
"Java",
"Php",
"Mining",
"Python",
"Database",
"Forecasting",
"Usability",
"Analysis",
"Technical",
"Algorithms"
],
"college_name":"None",
"degree":[ 
"Master of Computer Science",
"Bachelor of Technology in Computer Science and Engineering"
],
"designation":"None",
"experience":[ 
"help of maps and live location.",
"• Conducted thorough competitor analysis, requirement and usability studies. Achieved a higher satisfaction rating.",
"Develop and Run Spatial Queries on Geo-databases",
"Guide: Mr. Jia Yu",
"Tempe, Arizona",
"Period: September 2019-December 2019",
"• Extract data from a peer-to-peer taxi cab ﬁrm’s extensive database that contains geographic data as well as",
"real-time location data of customers, using Apache Spark and SparkSQL.",
"• Developed and performed spatial hot spot analysis which includes hot zone analysis and hot cell analysis.",
"ACADEMIC ACHIEVEMENTS AND EXTRA-CURRICULAR ACTIVITIES",
"• Awarded Scholarship from the Ministry of External Aﬀairs (Govt. of India) for academic performance",
"in the Higher secondary examination conducted by the Board.",
"• Head of Media Relations Team of the National Level Inter-Collegiate Cultural Festival of NIT-Trichy",
"(2016-2019). Associated with HBO, WB, Netﬂix, etc. Handled media aspects and led a team of 50 members."
],
"company_names":"None",
"no_of_pages":1,
"total_experience":0.25
}
];

var dom = {
  $data: $('#data'),
  $table: $('#table'),
};

function json2table(json, $table) {
  var cols = Object.keys(json[0]);

  var headerRow = '';
  var bodyRows = '';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  $table.html('<thead><tr></tr></thead><tbody></tbody>');

  cols.map(function(col) {
    headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
  });

  json.map(function(row) {
    bodyRows += '<tr>';

    cols.map(function(colName) {
      bodyRows += '<td>' + row[colName] + '</td>';
    })

    bodyRows += '</tr>';
  });

  $table.find('thead tr').append(headerRow);
  $table.find('tbody').append(bodyRows);
}

dom.$data.val(JSON.stringify(defaultData));
json2table(defaultData, dom.$table);

dom.$data.on('input', function() {
  json2table(JSON.parse(dom.$data.val()), dom.$table);
});
