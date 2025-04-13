// pipeline {
//     agent any

//     stages {
//         stage('Checkout') {
//             steps {
//                 git 'https://github.com/rameshinumulas/real-time-analytics-dashboard.git'
//             }
//         }

//         stage('Install Frontend Dependencies') {
//             steps {
//                 dir('real-time-dashboard-frontend') {
//                     sh 'npm install'
//                 }
//             }
//         }

//         stage('Build Frontend') {
//             steps {
//                 dir('real-time-dashboard-frontend') {
//                     sh 'npm run build'
//                 }
//             }
//         }

//         stage('Install Backend Dependencies') {
//             steps {
//                 dir('analytics-backend') {
//                     sh 'npm install'
//                 }
//             }
//         }

//         stage('Run Backend (Optional Test or Start)') {
//             steps {
//                 dir('analytics-backend') {
//                     sh 'node server.js & node ws-server.js'
//                 }
//             }
//         }
//     }
// }



pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS 18' // Set Node.js version from Jenkins
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/rameshinumulas/real-time-analytics-dashboard.git'
            }
        }
        stage('Install Frontend Dependencies') {
            steps {
                dir('real-time-dashboard-frontend') {
                    bat 'npm install'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('real-time-dashboard-frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('analytics-backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Backend (Optional Test or Start)') {
            steps {
                dir('analytics-backend') {
                    bat 'node server.js & node ws-server.js'
                }
            }
        }


        stage('Run Tests') {
            steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    bat 'npm test --passWithNoTests'
                }
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo 'Deploying the React App...'
                // Add deployment commands here
            }
        }
    }
}