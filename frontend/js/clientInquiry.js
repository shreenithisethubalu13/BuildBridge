document.getElementById("inquiryForm").addEventListener("submit", submitInquiry);

async function submitInquiry(e) {

    e.preventDefault();

    const inquiry = {

        siteName: document.getElementById("siteName").value,

        projectType: document.getElementById("projectType").value,

        location: document.getElementById("location").value,

        bhkCount: parseInt(document.getElementById("bhkCount").value),

        floorCount: parseInt(document.getElementById("floorCount").value),

        budget: parseFloat(document.getElementById("budget").value),

        duration: document.getElementById("duration").value,

        startDate: document.getElementById("startDate").value,

        endDate: document.getElementById("endDate").value

    };

    try {

        const response = await apiRequest(
            "/api/inquiries",
            "POST",
            inquiry
        );

        if(response.ok){

            alert("Inquiry Submitted Successfully!");

            document.getElementById("inquiryForm").reset();

            window.location.href="dashboard-client.html";

        }

        else{

            alert("Submission Failed");

        }

    }

    catch(error){

        console.error(error);

        alert("Server Error");

    }

}

