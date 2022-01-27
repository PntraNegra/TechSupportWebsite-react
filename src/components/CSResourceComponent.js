import React from 'react';

function CSResource(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">So you want to learn Computer Science?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p>Here will be posted Computer Science resources to learn skills like programming. The resources will be free, but almost all offer paid services and subscriptions as well.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="text-center">Resources</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">Free Code Camp</h5>
                    <p>Free code camp is a non-profit that contains many certification programs, tutorials and projects to help driven individuals earn certificates and learn how to code.</p>
                    <a href="https://www.freecodecamp.org/" className="text-dark">https://www.freecodecamp.org/</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">Code Cademy</h5>
                    <p>Code Cademy has many certificates, programs and courses. Many of these are free, but some are only avaliable by subscription.</p>
                    <a href="https://www.codecademy.com/" className="text-dark">https://www.codecademy.com/</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">W3 Schools</h5>
                    <p>W3 schools is a very good resource center, with avaliable tutorials. If you are ever coding your own project from scratch, reference code examples and snippits on W3 schools.</p>
                    <a href="https://www.w3schools.com/" className="text-dark">https://www.w3schools.com/</a>
                </div>
            </div>
        </div>

    );
}

export default CSResource;