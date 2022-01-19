import React from 'react';

export default function Contact() {
  return (
    <div>
      <div class="contactMe container mt-3">
      <h1 className="text-end px-5 mb-5 bg-danger text-white py-3">Contact Me</h1>
        <h1>Contact me by email</h1>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="Name" class="form-label"> Name </label>
            <input type="text" class="form-control" id="firstName" required></input>
          </div>

          <div class="col-md-8">
            <label for="emailInfo" class="form-label"> E-mail </label>
            <input type="email" class="form-control" id="emailInfo" required></input>
          </div>

          <div class="col-md-12">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="5"></textarea>
          </div>

          <div class="col-md-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
}