(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{394:function(e,t,o){"use strict";o.r(t);var r=o(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"index"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Some-Important-Questions"}},[e._v("Some Important Questions")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Produce-Good-Documentation"}},[e._v("Produce Good Documentation")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Model-Deployment"}},[e._v("Model Deployment")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),o("h2",{attrs:{id:"some-important-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#some-important-questions"}},[e._v("#")]),e._v(" Some Important Questions")]),e._v(" "),o("p",[e._v("Once you have a beautiful and well-tested trained Machine Learning model and you want to make it available to the external world, you should reason about these questions and answer them.")]),e._v(" "),o("p",[e._v("The answers will heavily depend on your use case, and it's impossible to capture every situation in this guide, but hopefully, this checklist can help you considering al the possible situations you can encounter and reason about them "),o("em",[e._v("before")]),e._v(" realizing them when it is too late.")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("How")]),e._v(" is the system expected to work in general?")]),e._v(" "),o("ul",[o("li",[e._v("Will the model be hosted on a machine and used locally, or will it serve his predictions over the Internet?")]),e._v(" "),o("li",[e._v("What is the input of the model?")]),e._v(" "),o("li",[e._v("What is the output of the model?")]),e._v(" "),o("li",[e._v("What constraints do you need to put over input and output (size, format, number of requests... )?")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Who (or what)")]),e._v(" is going to use my model?")]),e._v(" "),o("ul",[o("li",[e._v("Is the model going to be used by human users or another system?")]),e._v(" "),o("li",[e._v("Is the model going to be used by you or someone else?")]),e._v(" "),o("li",[e._v("If it's going to be used by other people, it's the usage well documented?")]),e._v(" "),o("li",[e._v("Do they have the right permissions to use it?")]),e._v(" "),o("li",[e._v("How are you gonna track their usage?")]),e._v(" "),o("li",[e._v("Do you need a payment system?")]),e._v(" "),o("li",[e._v("Can you be sure that the system won't be used maliciously?")])])]),e._v(" "),o("li",[o("p",[e._v("What are the "),o("strong",[e._v("requirements")]),e._v(" needed to use the model as intended?")]),e._v(" "),o("ul",[o("li",[e._v("What is the size of the model?")]),e._v(" "),o("li",[e._v("Is it going to be held in memory or loaded up once a request comes?")]),e._v(" "),o("li",[e._v("How many requests is the model going to receive, on average?")]),e._v(" "),o("li",[e._v("What is the speed required for the inference of the model?")]),e._v(" "),o("li",[e._v("How the size of the input/output affects the overall performance of the system (it's very easy to send documents over the Internet, while a high-quality video is more bandwidth-intensive?")])])]),e._v(" "),o("li",[o("p",[e._v("Is the input example "),o("strong",[e._v("meaningful")]),e._v(" for the model?")]),e._v(" "),o("ul",[o("li",[e._v("Is the input of the model coming from the same distribution of examples that the model has been trained over?")]),e._v(" "),o("li",[e._v('If not, how can you exclude "out-of-distribution" inputs (classification before inference, outlier detection...)?')]),e._v(" "),o("li",[e._v("How the performance of the model will impact the result (for each prediction, you have a confidence score, maybe you want to serve only predictions over a certain confidence threshold)?")])])]),e._v(" "),o("li",[o("p",[e._v("What are the "),o("strong",[e._v("costs")]),e._v(" of serving my model?")]),e._v(" "),o("ul",[o("li",[e._v("If the model is hosted locally or on your machine, the costs are often only the electricity you use to have a machine always turned on... but it's rare in 2020 to not leverage "),o("strong",[e._v("Cloud providers")]),e._v(" for serving models.")]),e._v(" "),o("li",[e._v("If the model is hosted on some Cloud provider (which is often the case), what are the hosting costs?")]),e._v(" "),o("li",[e._v("Often Cloud providers offer solutions where you pay for the number of requests that your model is receiving, what are these costs?")]),e._v(" "),o("li",[e._v("Cloud providers bills different costs for different machine sizes (depending on n. of CPUs, GBs of RAM, the presence of a GPU...), are you choosing the right machine for your model?")]),e._v(" "),o("li",[e._v("Cloud providers offer bills calculators that can estimate your costs, use them!")]),e._v(" "),o("li",[e._v("If it's too costly to serve your model, can you make it more lightweight?")])])])]),e._v(" "),o("p",[e._v("Once you have answered these questions, you should have a much clearer view of your serving requirements, and you can explore with much more consciousness the several serving possibilities, ranging from hosting the model on your machine (and serving it through REST APIs) to leveraging a CLoud provider like AWS, Azure or Google Cloud Platform.")]),e._v(" "),o("h2",{attrs:{id:"produce-good-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#produce-good-documentation"}},[e._v("#")]),e._v(" Produce Good Documentation")]),e._v(" "),o("p",[e._v("Like any other step of the Data Science Process, documenting the work done is fundamental to the success of the project.")]),e._v(" "),o("p",[e._v("We don't need to list the benefits that good documentation brings to a project, so we immediately understand what are the best practices to keep in mind when we produce documentation for our projects.")]),e._v(" "),o("h4",{attrs:{id:"documenting-in-general"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documenting-in-general"}},[e._v("#")]),e._v(" Documenting in General")]),e._v(" "),o("p",[e._v('Refer to the "Documentation" section of the '),o("a",{attrs:{href:"https://github.com/virgili0/Virgilio/edit/master/serving/purgatorio/define-the-scope-and-ask-questions/starting-a-data-project/starting-a-data-project.md",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("Starting a Data Project")]),e._v(" Guide"),o("OutboundLink")],1),e._v(" to have a nice introduction to good documentation practices and why documenting it's crucial for the success of any software project.")]),e._v(" "),o("h4",{attrs:{id:"documenting-the-model-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#documenting-the-model-usage"}},[e._v("#")]),e._v(" Documenting the Model Usage")]),e._v(" "),o("p",[e._v("One of the key questions you should have answered from "),o("a",{attrs:{href:"#Some-Important-Questions"}},[e._v("Some Important Questions")]),e._v(" is:")]),e._v(" "),o("ul",[o("li",[e._v("Who (or what) is going to use my model?")])]),e._v(" "),o("p",[e._v("In case someone else is going to use the model, he could interact with it in two ways: directly with a user action or through another system.\nIn both cases "),o("strong",[e._v("he needs")]),e._v(" a clear reference about the usage and the expected behavior of the model.")]),e._v(" "),o("p",[e._v("The solution that Virgilio suggests is to use the "),o("a",{attrs:{href:"https://modelcards.withgoogle.com/about",target:"_blank",rel:"noopener noreferrer"}},[e._v("Model Cards"),o("OutboundLink")],1),e._v(" technique from Google.")]),e._v(" "),o("p",[e._v("You can read here the detailed reasons behind Google's engineers in this regard!")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arxiv.org/abs/1810.03993",target:"_blank",rel:"noopener noreferrer"}},[e._v("Model Cards for Model Reporting"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Some examples:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://modelcards.withgoogle.com/face-detection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Face Detection Model"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://modelcards.withgoogle.com/object-detection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Object Detection Model"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("As you can see, if you have never seen this model, the model card can definitely let you understand:")]),e._v(" "),o("ul",[o("li",[e._v("What the model does")]),e._v(" "),o("li",[e._v("What is the Input/Output")]),e._v(" "),o("li",[e._v("What are the expected performances")]),e._v(" "),o("li",[e._v("What are the limitations of the model")])]),e._v(" "),o("p",[e._v("These are all important information for everyone who wants to use the model!")]),e._v(" "),o("p",[e._v("Bonus tip:")]),e._v(" "),o("p",[e._v("If you think you will be the only user of the model in the future, "),o("em",[e._v("don't underestimate the value")]),e._v(" that comes from good documentation, even for the author of the documentation!")]),e._v(" "),o("blockquote",[o("p",[e._v('In 6 months you will look at this code and ask "Who the heck wrote this ***?"')])]),e._v(" "),o("p",[e._v("Having clear documentation will save you a lot of time and headaches.")]),e._v(" "),o("h2",{attrs:{id:"model-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-deployment"}},[e._v("#")]),e._v(" Model Deployment")]),e._v(" "),o("p",[e._v("Once you have answered all the questions in the "),o("a",{attrs:{href:"#Some-Important-Questions"}},[e._v("Some Important Questions")]),e._v(" section, it's time to learn what are the best ways to deploy the model in the real world!")]),e._v(" "),o("p",[e._v("Virgilio has set up for you some resources you can refer to, but most of the time "),o("a",{attrs:{href:"https://towardsdatascience.com/why-is-machine-learning-deployment-hard-443af67493cd",target:"_blank",rel:"noopener noreferrer"}},[e._v("you will encounter real-world caveats"),o("OutboundLink")],1),e._v(" that will require you to choose the best tradeoff for the specific situation.")]),e._v(" "),o("p",[e._v("However, luckily for us do exist best practices and common patterns to solve the majority of the most common problems when dealing with model deployment, and Virgilio collected for you the best free resources.")]),e._v(" "),o("p",[e._v("Start with:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.dropbox.com/s/sslzy9vr4qwarlh/Chapter7.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine Learning Engineering Book - Chapter 7 - Model Deployment"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Then take a look at the following videos, they're really informative:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.youtube.com/watch?v=AVj3G2MbjOM",target:"_blank",rel:"noopener noreferrer"}},[e._v("RESTful Machine Learning with Flask and TensorFlow Serving"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.youtube.com/watch?v=nfQdqp-0E50&list=PLL2hlSFBmWwzrhahyQscxASc3ZQFh95xl",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API with Python and Flask"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Here you have a full detailed and practical course about how to create several examples of machine learning web applications:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.youtube.com/watch?v=tFjeUtFay_Q&list=PLJ39kWiJXSiyAFG2W3CUPWaLhvR5CQmTd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine Learning Web App"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Eventually, you can have a look at TensorFlow's official way to serve models, Tensorflow Serving.")]),e._v(" "),o("p",[e._v("TensorFlow Serving is a flexible, high-performance serving system for machine learning models, designed for production environments. TensorFlow Serving makes it easy to deploy new algorithms and experiments while keeping the same server architecture and APIs.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.tensorflow.org/tfx/guide/serving",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tensorflow Serving Official Guide"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/tensorflow/serving/tree/master/tensorflow_serving/example",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tensorflow Serving Official Examples"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/yu-iskw/tensorflow-serving-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("More Tensorflow Serving Examples"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("The Virgilio tip here is to not start with Tensorflow Serving because for learning purposes it can be an overkill, because of the number of options and configurations.")]),e._v(" "),o("p",[e._v("To build demonstrations or just try your model through the web, a small and simple Flask app can be enough.")]),e._v(" "),o("h4",{attrs:{id:"cloud-providers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cloud-providers"}},[e._v("#")]),e._v(" Cloud providers")]),e._v(" "),o("p",[e._v("Today, most of the real-world Machine Learning problems require scale and flexibility (growing numbers of users, frequent re-training...).")]),e._v(" "),o("p",[e._v("A good option to deploy ML models is to leverage the most important Cloud providers like "),o("a",{attrs:{href:"https://aws.amazon.com/it/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://azure.microsoft.com/it-it/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://cloud.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCP"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("There's a ton of tutorial and informative videos on Youtube, both from the platform's official channels, and from independent creators, check out them!")]),e._v(" "),o("p",[e._v("All the three Cloud providers have a dedicated Machine Learning / Data Science suite of services, to it's often easy to rely on these for your deployment.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://aws.amazon.com/it/sagemaker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon SageMaker"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://azure.microsoft.com/it-it/services/machine-learning/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Machine Learning"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://cloud.google.com/ai-platform",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud - AI Platform"),o("OutboundLink")],1)])]),e._v(" "),o("p",[o("strong",[e._v("Just be very careful with the costs associated with the compute resources you ask the provider!")])]),e._v(" "),o("h2",{attrs:{id:"conclusions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),o("p",[e._v("In this guide you have seen most of the important questions you should ask yourself "),o("em",[e._v("before")]),e._v(" deciding to put a Machine Learning model in production, making it available for other users or systems. You also have a detailed list of all the resources that can get you from zero to full skill in practical model deployment.")])])}),[],!1,null,null,null);t.default=n.exports}}]);