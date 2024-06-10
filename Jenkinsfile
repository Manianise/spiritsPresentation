pipeline {
    agent {
        label 'node_agent'
    }
    
    environment {
        SONARQUBE_SERVER = 'Sonar server'
        DOCKER_HUB_PAT = credentials('docker_login')
        
    }

    stages {
        stage('clone') {
            steps {
                git branch: 'master', url: 'https://github.com/Manianise/spiritsPresentation.git'
            }
        }
        stage('install') {
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage('Testing') {
            steps {
                sh 'npm run test'                
            }

        }
        stage('scan') {
            steps {
                withSonarQubeEnv(SONARQUBE_SERVER) {
                    sh '''
                    sonar-scanner \
                    -Dsonar.projectKey=spirits \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://172.216.0.5:9000 \
                    -Dsonar.token=sqp_f25a05bc6c69bd517e7b18278c7871caf99299b9
                    '''
                }
            }
        }
        stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
              }
            }
        }    
        stage('delivery') {
            steps {
                sh '''
                    docker login -u mechameleon -p ${DOCKER_HUB_PAT}
                    docker build  . -t mechameleon/spirits:${BUILD_ID}
                    docker push mechameleon/spirits:${BUILD_ID}
                '''
            }
        }
        stage('post') {
            steps {
                post {
                    always {
                        // Clean up actions, e.g., archive artifacts, notify, etc.
                        archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
                        junit '**/target/surefire-reports/*.xml'
                    }
                }     
            }
        }

    }
}

