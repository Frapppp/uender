#!/usr/bin/python

fnames = ['0643/0643/ABODAT.643']

badDuden = {}

def insertTupleToDict(tuple, dict):
	elements = tuple.split()
	correctWord = elements[1]
	wrongWord = elements[0]
	if (len(elements)>2):
		tmp = elements[2]
		if(tmp.isdigit()):
			frequency = int(tmp)
		else:
			frequency = 1
	else:
		frequency = 1
	if not correctWord in dict:
		dict[correctWord] = [(wrongWord,frequency)]
	else:
		dict[correctWord].append((wrongWord,frequency))
		
def createDict(fname, dict):
	lines = [line.rstrip('\n') for line in open(fname)]
	foundFirst = False
	for l in lines:
		if (l[0]=='$'):
			if (foundFirst==False):
				foundFirst = True
		elif (foundFirst==True):
			for tuple in l.split(','):
				if tuple:
					tuple = tuple.replace(".","")
					insertTupleToDict(tuple,dict)

for f in fnames:
	createDict(f,badDuden)
	
print badDuden