'use strict';

//Variables
var classAbrv = {
    "ARCTIC" : "Arctic Studies",
    "HONORS" : "Honors",
    "Q SCI" : "Quantitative Science",
    "AFRAM" : "Afro-American Studies",
    "AES" : "American Ethnic Studies",
    "AAS" : "Asian-American Studies",
    "CHSTU" : "Chicano Studies",
    "SWA" : "SWA",
    "TAGLG" : "Tagalog",
    "AIS" : "American Indian Studies",
    "ANTH" : "Anthropology",
    "ARCHY" : "Archaeology",
    "BIO A" : "Biocultural Anthropology",
    "AMATH" : "Applied Mathematics",
    "CFRM" : "Computational Finance and Risk Management",
    "ART" : "Art",
    "ART H" : "Art History",
    "DESIGN" : "Design",
    "ASIAN" : "Asian Languages and Literature",
    "BENG" : "Bengali",
    "CHIN" : "Chinese",
    "HINDI" : "Hindi",
    "INDN" : "Indian",
    "INDO" : "Indonesian",
    "JAPAN" : "Japanese",
    "KOREAN" : "Korean",
    "SNKRT" : "Sanskrit",
    "THAI" : "Thai",
    "URDU" : "Urdu",
    "VIET" : "Vietnamese",
    "ASTBIO" : "Astrobiology and Early Evolution",
    "ASTR" : "Astronomy",
    "ATM S" : "Atmospheric Sciences",
    "BIOL" : "Biology",
    "CS&SS" : "Center for Statistics and Social Sciences",
    "CSDE" : "Center for Studies in Demography and Ecology",
    "HUM" : "Center for the Humanities",
    "CHEM" : "Chemistry",
    "CL AR" : "Classical Archaeology",
    "CL LI" : "Classical Linguistics",
    "CLAS" : "Classics",
    "GREEK" : "Greek",
    "LATIN" : "Latin",
    "COM" : "Communication",
    "CHID" : "Comparative History of Ideas",
    "C LIT" : "Comparative Literature",
    "DANCE" : "Dance",
    "DXARTS" : "Digital Arts and Experimental Media",
    "DIS ST" : "Disability Studies",
    "DRAMA" : "Drama",
    "ECON" : "Economics",
    "ENGL" : "English",
    "GWSS" : "Gender, Women, and Sexuality Studies",
    "GIS" : "General Interdisciplinary Studies",
    "GEN ST" : "General Studies",
    "INDIV" : "Individualized Studies",
    "GEOG" : "Geography",
    "GERMAN" : "Germanics",
    "HSTAM" : "Ancient and Medieval History",
    "HSTCMP" : "Comparative and Transregional History",
    "HIST" : "History",
    "HSTAFM" : "History of Africa and the Middle East",
    "HSTAS" : "History of Asia",
    "HSTLAC" : "History of Latin America and the Caribbean",
    "HSTEU" : "History of Modern Europe",
    "HSTAA" : "History of North America United States and Canada)",
    "HSTRY" : "History Seminars and Independent Studies",
    "HPS" : "History and Philosophy of Science",
    "INTSCI" : "Integrated Science",
    "ISS" : "Integrated Social Sciences",
    "JSIS" : "International Studies Gateway/Core)",
    "JSIS A" : "International Studies (Area Studies)",
    "JSIS B" : "International Studies (Global/Thematic)",
    "JSIS C" : "International Studies (Comparative Religion/Jewish Studies)",
    "JSIS D" : "International Studies",
    "JSIS E" : "International Studies (Language)",
    "LSJ" : "Law, Societies, and Justice",
    "ASL" : "American Sign Language",
    "LING" : "Linguistics",
    "MATH" : "Mathematics",
    "MICROM" : "Microbiology",
    "MUSIC" : "Music",
    "MUSAP" : "Music - Applied",
    "MUSED" : "Music Education",
    "MUSEN" : "Music Ensemble",
    "MUHST" : "Music History",
    "MUSICP" : "Music Performance",
    "AKKAD" : "Akkadian",
    "ARAB" : "Arabic",
    "ARAMIC" : "Aramaic",
    "EGYPT" : "Egyptian",
    "HEBR" : "Hebrew",
    "NEAR E" : "Near Eastern Languages and Civilization",
    "PRSAN" : "Persian",
    "TKIC" : "Turkic",
    "TKISH" : "Turkish",
    "UGARIT" : "Ugaritic",
    "NBIO" : "Neurobiology",
    "PHIL" : "Philosophy",
    "VALUES" : "Values in Society",
    "PHYS" : "Physics",
    "POL S" : "Political Science",
    "PSYCH" : "Psychology",
    "FRENCH" : "French",
    "ITAL" : "Italian",
    "PORT" : "Portuguese",
    "ROMAN" : "Romance Languages and Literature",
    "RMN" : "Romanian (Romance)",
    "SPAN" : "Spanish",
    "SPLING" : "Spanish Linguistics",
    "DANISH" : "Danish",
    "ESTO" : "Estonian",
    "FINN" : "Finnish",
    "LATV" : "Latvian",
    "LITH" : "Lithuanian",
    "NORW" : "Norwegian",
    "SCAND" : "Scandinavian",
    "SWED" : "Swedish",
    "BCS" : "Bosnian-Croatian-Serbian",
    "BULGR" : "Bulgarian",
    "CZECH" : "Czech",
    "POLSH" : "Polish",
    "ROMN" : "Romanian (Slavic)",
    "RUSS" : "Russian",
    "SLAV" : "Slavic",
    "SLAVIC" : "Slavic Languages and Literatures",
    "SLVN" : "Slovenian",
    "UKR" : "Ukrainian",
    "SOCSCI" : "Social Sciences",
    "SOC" : "Sociology",
    "SPHSC" : "Speech and Hearing Sciences",
    "STAT" : "Statistics",
    "ARCH" : "Architecture",
    "B E" : "Built Environment",
    "CAUP" : "College of Architecture and Urban Planning",
    "CM" : "Construction Management",
    "L ARCH" : "Landscape Architecture",
    "CEP" : "Community, Environment, and Planning",
    "R E" : "Real Estate",
    "SPCI" : "Strategic Planning for Critical Infrastructures",
    "URBDP" : "Urban Planning",
    "ACCTG" : "Accounting",
    "ADMIN" : "Administration",
    "B A" : "Business Administration",
    "BA RM" : "Business Administration Research Methods",
    "B CMU" : "Business Communications",
    "B ECON" : "Business Economics",
    "B POL" : "Business Policy",
    "EBIZ" : "Electronic Business",
    "ENTRE" : "Entrepreneurship",
    "FIN" : "Finance",
    "HRMOB" : "Human Resources Management and Organizational Behavior",
    "I S" : "Information Systems",
    "MSIS" : "Information Systems Master of Science",
    "I BUS" : "International Business",
    "MGMT" : "Management",
    "MKTG" : "Marketing",
    "OPMGT" : "Operations Management",
    "O E" : "Organization and Environment",
    "PEI" : "Program on Entrepreneurial Innovation",
    "QMETH" : "Quantitative Methods",
    "ST MGT" : "Strategic Management",
    "D HYG" : "Dental Hygiene",
    "DPHS" : "Dental Public Health Sciences",
    "DENT" : "Dentistry",
    "O S" : "Oral Surgery",
    "PEDO" : "Pedodontics",
    "ENDO" : "Endodontics",
    "ORALB" : "Oral Biology",
    "ORALM" : "Oral Medicine",
    "ORTHO" : "Orthodontics",
    "PERIO" : "Periodontics",
    "PROS" : "Prosthodontics",
    "RES D" : "Restorative Dentistry",
    "EDC&I" : "Curriculum and Instruction",
    "EDUC" : "College of Education",
    "ECFS" : "Early Childhood and Family Studies",
    "EDTEP" : "Education (Teacher Education Program)",
    "EDLPS" : "Educational Leadership and Policy Studies",
    "EDPSY" : "Educational Psychology",
    "EDSPE" : "Special Education",
    "A A" : "Aeronautics and Astronautics",
    "A E" : "Aerospace Engineering",
    "CHEM E" : "Chemical Engineering",
    "NME" : "Nanoscience and Molecular Engineering",
    "CEE" : "Civil and Environmental Engineering",
    "CSE" : "Computer Science and Engineering",
    "E E" : "Electrical Engineering",
    "ENGR" : "Engineering",
    "HCDE" : "Human Centered Design and Engineering",
    "T C" : "Technical Communication",
    "IND E" : "Industrial Engineering",
    "MS E" : "Materials Science and Engineering",
    "M E" : "Mechanical Engineering",
    "MEIE" : "Mechanical Engineering Industrial Engineering",
    "FISH" : "Aquatic and Fishery Sciences",
    "C ENV" : "College of the Environment",
    "FHL" : "Friday Harbor Labs",
    "SCI T" : "Science Teaching",
    "ESS" : "Earth and Space Sciences",
    "ENVIR" : "Program on the Environment",
    "BSE" : "Bioresource and Science Engineering",
    "ESRM" : "Environmental Science and Resource Management",
    "PSE" : "Paper Science and Engineering",
    "SEFS" : "School of Environmental and Forest Sciences",
    "SMA" : "School of Marine Affairs",
    "OCEAN" : "Oceanography",
    "QUAT" : "Quaternary Sciences",
    "INFO" : "Informatics",
    "IMT" : "Information Management and Technology",
    "INFX" : "Information School Interdisciplinary",
    "INSC" : "Information Science",
    "ITA" : "Information Technology Applications",
    "LIS" : "Library and Information Science",
    "BIOEN" : "Bioengineering",
    "MEDENG" : "Medical Engineering",
    "PHARBE" : "Pharmaceutical Bioengineering",
    "UCONJ" : "University Conjoint Courses",
    "BIOST" : "Biostatistics",
    "ENV H" : "Environmental Health",
    "EPI" : "Epidemiology",
    "G H" : "Global Health",
    "HIHIM" : "Health Informatics and Health Information Management",
    "HSERV" : "Health Services",
    "HSMGMT" : "Health Services Management",
    "PABIO" : "Pathobiology",
    "PHG" : "Public Health Genetics",
    "SPH" : "School of Public Health",
    "A S" : "Aerospace Studies",
    "M SCI" : "Military Science",
    "N SCI" : "Naval Science",
    "SOC W" : "Social Work"
}


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Tfile = mongoose.model('Tfile'),
	_ = require('lodash'),
        fs = require('fs');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Tfile already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Tfile
 */
exports.create = function(req, res) {
	var tfile = new Tfile(req.body);
	tfile.user = req.user;

	tfile.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfile);
		}
	});
};

exports.createAll = function() {
    console.log("hi");
    var newFiles;
    fs.readdir('../../public/tests', function (err, files){
        if(err){
            newFiles = null;
            return res.send(400, {
                message: getErrorMessage(err)
            });
        } else {
            newFiles = files;
        }
    });
    console.log(files);


}

/**
 * Show the current Tfile
 */
exports.read = function(req, res) {
	res.jsonp(req.tfile);
};

/**
 * Update a Tfile
 */
exports.update = function(req, res) {
	var tfile = req.tfile ;

	tfile = _.extend(tfile , req.body);

	tfile.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfile);
		}
	});
};

/**
 * Delete an Tfile
 */
exports.delete = function(req, res) {
	var tfile = req.tfile ;

	tfile.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfile);
		}
	});
};

/**
 * List of Tfiles
 */
exports.list = function(req, res) { Tfile.find().sort('-created').populate('user', 'displayName').exec(function(err, tfiles) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfiles);
		}
	});
};

/**
 * Tfile middleware
 */
exports.tfileByID = function(req, res, next, id) { Tfile.findById(id).populate('user', 'displayName').exec(function(err, tfile) {
		if (err) return next(err);
		if (! tfile) return next(new Error('Failed to load Tfile ' + id));
		req.tfile = tfile ;
		next();
	});
};

/**
 * Tfile authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.tfile.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};