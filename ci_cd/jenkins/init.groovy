import jenkins.model.*;
import hudson.security.*;
import hudson.plugins.git.*;
import hudson.model.*;
import hudson.slaves.*;
import hudson.tools.*;
import jenkins.plugins.nodejs.*;
import jenkins.plugins.nodejs.tools.*;
//import com.nirima.jenkins.plugins.docker.DockerCloud
//import com.nirima.jenkins.plugins.docker.DockerTemplate
//import com.nirima.jenkins.plugins.docker.DockerTemplateBase
//import com.nirima.jenkins.plugins.docker.launcher.AttachedDockerComputerLauncher
//import io.jenkins.docker.connector.DockerComputerAttachConnector
//import hudson.model.FreeStyleProject

//import hudson.model.Node.Mode

//import hudson.model.Item
//import hudson.util.PersistedList
//import jenkins.branch.*
//import jenkins.plugins.git.*
//import org.jenkinsci.plugins.workflow.multibranch.*
//import com.cloudbees.hudson.plugins.folder.*
//import org.jenkinsci.plugins.workflow.job.WorkflowJob
//import com.coravy.hudson.plugins.github.GithubProjectProperty



def env = System.getenv()
def jenkins = Jenkins.getInstance()


/* Add default user */
jenkins.setSecurityRealm(new HudsonPrivateSecurityRealm(false))
jenkins.setAuthorizationStrategy(new GlobalMatrixAuthorizationStrategy())

def user = jenkins.getSecurityRealm().createAccount(env.JENKINS_USER, env.JENKINS_PASS)
user.save()

jenkins.getAuthorizationStrategy().add(Jenkins.ADMINISTER, env.JENKINS_USER)
jenkins.save()


/* Set number of executors */
jenkins.setNumExecutors(2)

/* Add Node.js installation */
//def desc = jenkins.getDescriptor('jenkins.plugins.nodejs.tools.NodeJSInstallation')

def nodejs_version = env.NODEJS_VERSION
def desc = jenkins.getDescriptorByType(NodeJSInstallation.DescriptorImpl.class)

def installations = [];
def installer = new NodeJSInstaller(nodejs_version, "", 100)
def installerProps = new InstallSourceProperty([installer])
def installation = new NodeJSInstallation("latest", "", [installerProps])
installations.push(installation)
desc.setInstallations(installations.toArray(new NodeJSInstallation[0]))
desc.save()
jenkins.save()

/* Set up Docker plugin*/
// parameters
/*
def dockerTemplateBaseParameters = [
  bindAllPorts:       false,
  bindPorts:          '',
  cpuShares:          null,
  dnsString:          '',
  dockerCommand:      '',
  environmentsString: '',
  extraHostsString:   '',
  hostname:           '',
  image:              'jenkins/jnlp-slave:latest',
  macAddress:         '',
  memoryLimit:        null,
  memorySwap:         null,
  network:            '',
  privileged:         false,
  pullCredentialsId:  '',
  tty:                true,
  volumesFromString:  '',
  volumesString:      ''
]
 
def DockerTemplateParameters = [
  instanceCapStr: '4',
  labelString:    'docker.local.jenkins.slave',
  remoteFs:       ''
]
 
def dockerCloudParameters = [
  connectTimeout:   3,
  containerCapStr:  '4',
  credentialsId:    '',
  dockerHostname:   '',
  name:             'docker.local',
  readTimeout:      60,
  serverUrl:        'unix:///var/run/docker.sock',
  version:          ''
]
 
// https://github.com/jenkinsci/docker-plugin/blob/docker-plugin-1.1.2/src/main/java/com/nirima/jenkins/plugins/docker/DockerTemplateBase.java
DockerTemplateBase dockerTemplateBase = new DockerTemplateBase(
  dockerTemplateBaseParameters.image,
  dockerTemplateBaseParameters.pullCredentialsId,
  dockerTemplateBaseParameters.dnsString,
  dockerTemplateBaseParameters.network,
  dockerTemplateBaseParameters.dockerCommand,
  dockerTemplateBaseParameters.volumesString,
  dockerTemplateBaseParameters.volumesFromString,
  dockerTemplateBaseParameters.environmentsString,
  dockerTemplateBaseParameters.hostname,
  dockerTemplateBaseParameters.memoryLimit,
  dockerTemplateBaseParameters.memorySwap,
  dockerTemplateBaseParameters.cpuShares,
  dockerTemplateBaseParameters.bindPorts,
  dockerTemplateBaseParameters.bindAllPorts,
  dockerTemplateBaseParameters.privileged,
  dockerTemplateBaseParameters.tty,
  dockerTemplateBaseParameters.macAddress,
  dockerTemplateBaseParameters.extraHostsString
)
 
// https://github.com/jenkinsci/docker-plugin/blob/docker-plugin-1.1.2/src/main/java/com/nirima/jenkins/plugins/docker/DockerTemplate.java
DockerTemplate dockerTemplate = new DockerTemplate(
  dockerTemplateBase,
  new DockerComputerAttachConnector(),
  DockerTemplateParameters.labelString,
  DockerTemplateParameters.remoteFs,
  DockerTemplateParameters.instanceCapStr
)
 
// https://github.com/jenkinsci/docker-plugin/blob/docker-plugin-1.1.2/src/main/java/com/nirima/jenkins/plugins/docker/DockerCloud.java
DockerCloud dockerCloud = new DockerCloud(
  dockerCloudParameters.name,
  [dockerTemplate],
  dockerCloudParameters.serverUrl,
  dockerCloudParameters.containerCapStr,
  dockerCloudParameters.connectTimeout,
  dockerCloudParameters.readTimeout,
  dockerCloudParameters.credentialsId,
  dockerCloudParameters.version,
  dockerCloudParameters.dockerHostname
)
 
// add cloud configuration to Jenkins
jenkins.clouds.add(dockerCloud)
 
// save current Jenkins state to disk
jenkins.save()
*/


//WorkflowJob job = jenkins.createProject(WorkflowJob, 'skill_matcher_pipeline')


/*
DumbSlave dumb = new DumbSlave(
  'agent',
  'docker slave',
  '/home/jenkins/',
  '2',
  Mode.EXCLUSIVE,
  '',
  new JNLPLauncher(true),
  RetentionStrategy.INSTANCE)

jenkins.addNode(dumb)
*/