import jenkins.model.*
import hudson.plugins.git.*

def scm = new GitSCM("https://github.com/nessfullstackteama/skill_matcher.git")
scm.branches = [new BranchSpec("*/dev")];

def flowDefinition = new org.jenkinsci.plugins.workflow.cps.CpsScmFlowDefinition(scm, "Jenkinsfile")

def parent = Jenkins.instance
def job = new org.jenkinsci.plugins.workflow.job.WorkflowJob(parent, "skill_matcher")
job.definition = flowDefinition

parent.reload()