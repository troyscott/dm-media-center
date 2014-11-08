#!/usr/bin/env perl

use LWP::UserAgent;

my $imdbFileName = 'imdb.txt';
my $ua = LWP::UserAgent->new;

unless (-e $imdbFileName) {
print 'processing...';
$ua->agent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36');
my $req = HTTP::Request->new(GET => 'http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=151&title_type=tv_series');
my $resp = $ua->request($req);
my $code = $resp->code;

print "$code\n";

open my $outImdbFile, '>', $imdbFileName or die "Failed opening $imdbFileName";
$resp->is_success ? print $outImdbFile $resp->content : print 'get content failed';
close $outImdbFile;

}

print "file exits\n";



