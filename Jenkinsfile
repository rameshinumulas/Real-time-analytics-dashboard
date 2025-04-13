pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/rameshinumulas/real-time-analytics-dashboard.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('real-time-dashboard-frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('real-time-dashboard-frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('analytics-backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend (Optional Test or Start)') {
            steps {
                dir('analytics-backend') {
                    sh 'node server.js & node ws-server.js'
                }
            }
        }
    }
}
