<?php

namespace App\Http\Controllers;

use App;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Codedge\Fpdf\Fpdf\Fpdf;
use Inertia\Inertia;
use Inertia\Response;

class CertificateController extends Controller
{
    function index()
    {
        $certificates = Certificate::with('media')->get();
        return Inertia::render('Typing/CertificatesPage', [
            'certificates' => $certificates
        ]);
    }

    function certificate(Certificate $certificate)
    {
        $fpdf = new Fpdf;
        $fpdf->AddPage('landscape', 'A4');
        $fpdf->Image($certificate->getFirstMediaUrl('certificates'), w: 250, x: 25);
        $fpdf->SetFont('Courier', 'B', 18);
        $fpdf->Output();
        exit;
    }

    function currentLessonCertificate($lessonId)
    {
        $certificate = Certificate::where('lesson_id', $lessonId)->first();
        $fpdf = new Fpdf;
        $fpdf->AddPage('landscape', 'A4');
        $fpdf->Image($certificate->getFirstMediaUrl('certificates'), w: 250, x: 25);
        $fpdf->SetFont('Courier', 'B', 18);
        $fpdf->Output();
        exit;
    }
}
