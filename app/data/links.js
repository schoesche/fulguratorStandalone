'use strict';


angular.module('fulgurator.linksModule', [])



    .value('linksModule', {
        allLinks: function() {

            var rowCollection = [
                {
                    "groupname": "Allgemein",
                    "grouplinks": [
                        {
                            "name": "RedNet",
                            "tag": "rednet mobiliar rn",
                            "link": "https://rednet.mobi.mobicorp.ch/ssp_ds/home.html"
                        },
                        {
                            "name": "Wiki ELAN",
                            "tag": "elan wiki wikielan elanwiki",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php?title=Hauptseite_ElanWiki"
                        }
                    ]
                },
                {
                    "groupname": "Development",
                    "grouplinks": [
                        {
                            "name": "AMW",
                            "tag": "amw umgebungen",
                            "link": "https://unix-infra.mobi.ch/AMW_web"
                        },
                        {
                            "name": "Jenkins Baseline",
                            "tag": "jenkins baseline build server",
                            "link": "https://baseline.mobicorp.test:8443/"
                        },
                        {
                            "name": "Jenkins CI",
                            "tag": "jenkins ci build server",
                            "link": "https://ci.mobicorp.test:8443/"
                        },
                        {
                            "name": "Architektur Guidelines",
                            "tag": "guidelines architektur",
                            "link": "http://guidelines.mobicorp.test:8080/dashboard.action"
                        },
                        {
                            "name": "SOAP Repo",
                            "tag": "soap repo webservice",
                            "link": "http://soarepo.mobicorp.test:8080/soarepo/pages/index.xhtml"
                        },
                        {
                            "name": "Wiki Elan Testumgebungen",
                            "tag": "wiki elan testumbegungen",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Noch_mehr_zu_Testumgebungen"
                        },
                        {
                            "name": "Masterliste Applikation",
                            "tag": "masterliste Applikation",
                            "link": "https://rednet.mobi.mobicorp.ch/mobidoc/Rednet/de/07_Unternehmenseinheiten/05_IT/nonindex_IT_misc/masterliste_de.xlsx"
                        }
                    ]
                },
                {
                    "groupname": "System Dokumentation",
                    "grouplinks": [
                        {
                            "name": "Wiki ELAN neue Mitarbeiter",
                            "tag": "Wiki elan neue mitarbeiter",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Willkommen_im_ELAN_Team"
                        },
                        {
                            "name": "Wiki ELAN neue Mitarbeiter",
                            "tag": "Wiki elan neue mitarbeiter",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Willkommen_im_ELAN_Team"
                        },
                        {
                            "name": "Glossar",
                            "tag": "Mobiliar glossar",
                            "link": "https://rednet.mobi.mobicorp.ch/ssp_ds/arbeitsmittel-glossare.html"
                        }
                    ]
                },
                {
                    "groupname": "Tools",
                    "grouplinks": [
                        {
                            "name": "Lifecycle Management",
                            "tag": "quality center lifecycle management applikation application",
                            "link": "  https://pzone2.mobi.ch/qcbin/start_a.jsp"
                        },
                        {
                            "name": "BMC",
                            "tag": "bmc tickets 3rdLevel",
                            "link": "https://itsm.mobi.mobicorp.ch/arsys/forms/itsm/SHR:LandingConsole/Default+Administrator+View/?cacheid=1537590a"
                        },
                        {
                            "name": "Subversion",
                            "tag": "svn repo",
                            "link": "https://svn.mobicorp.ch/svn/"
                        }
                    ]
                },
                {
                    "groupname": "Betrieb",
                    "grouplinks": [
                        {
                            "name": "BMC",
                            "tag": "bmc tickets 3rdLevel",
                            "link": "https://itsm.mobi.mobicorp.ch/arsys/forms/itsm/SHR:LandingConsole/Default+Administrator+View/?cacheid=1537590a"
                        },
                        {
                            "name": "Wiki Elan Support",
                            "tag": "wiki elan Support 3rdLevel ",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Know-how_Elan_Support"
                        },
                        {
                            "name": "Datenkreislauf Einstiegsseite",
                            "tag": "Datenkreislauf Einstiegsseite Daten Transfer Host Extraktor DB2",
                            "link": "http://s90214/"
                        },
                        {
                            "name": "Wiki bekannte Probleme",
                            "tag": "bekannte Probleme 3rd Level support kategorie archiv",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Kategorie:Elan_Problem:Archiv"
                        },
                        {
                            "name": "Wiki wichtige kontakte",
                            "tag": "wichtige kontake elan support know-how",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Wichtige_Kontakte"
                        },
                        {
                            "name": "Wiki kopieren von Partnerdaten",
                            "tag": "elan wiki kopieren partnerdaten host",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Host-Funktionen"
                        },
                        {
                            "name": "F&A Board",
                            "tag": "f und a fa f&a board",
                            "link": "http://mobidoc.mobi.ch/cgi-bin2/FAB2/faboard.pl?Name=ELANFABoard&sprache_inhalt=de"
                        },
                        {
                            "name": "VEOTRAC1 Table",
                            "tag": "code schlüssel schluessel key partner vertrag initiating machine type of change c40000",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/VEOTRAC1"
                        },
                        {
                            "name": "Wiki Informationen zu Tabellen",
                            "tag": "table db elan information c999 hf VEO VTO",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Informationen_zu_Tabellen"
                        },
                        {
                            "name": "Wiki Logs besser verstehen",
                            "tag": "alle elan log files walkbacks session logs user logs server logs fehler normalbetrieb",
                            "link": "https://mobiwiki.mobicorp.ch/wiki/index.php/Alle_Elan_Log_Files"
                        }
                    ]
                }

            ];

            return rowCollection;

        }
    });

